const bodyParser = require('body-parser');
const express = require('express');
const GoogleStrategy = require('passport-google-oidc');
const LocalStrategy = require('passport-local');
const passport = require('passport');

const auth = require('../auth');
const db = require('../db/index');

const router = express.Router();

// https://expressjs.com/en/resources/middleware/body-parser.html
const jsonParser = bodyParser.json();

// https://www.passportjs.org/concepts/authentication/password/
passport.use(new LocalStrategy(auth.localVerify));

// https://www.passportjs.org/concepts/authentication/google/
passport.use(new GoogleStrategy(auth.googleConfig, auth.googleVerify));

router.post('/logout', (req, res) => {
  req.logout(err => { // Added callback function for req.logout()
    req.session.destroy(err => { 
      if (err) {
        console.error("Error destroying session:", err);
        res.sendStatus(500); 
      } else {
        res.sendStatus(200); 
      }
    });
  });
});

router.get('/status', (req, res) => {
  let jsonData;
  if (!req.isAuthenticated()) {
    jsonData = { logged_in: false, id: null, email_address: null, auth_method: null };
  } else {
    jsonData = {
      logged_in: true,
      id: req.user.id,
      email_address: req.user.email_address,
      auth_method: req.user.auth_method
    };
  }
  res.status(200).json(jsonData);
});

router.get('/register', jsonParser, (req, res) => {
  res.status(404).send('Please make a valid POST request to register.');
});

router.post('/register', jsonParser, async (req, res) => {
  try {
    const { email_address, password } = req.body;

    const userExists = await db.emailExists(email_address);
    if (userExists) {
      return res.status(400).send(
        `Registration failed. The email '${email_address}' is already registered; please use another.`
      );
    }

    const hashedPassword = await auth.hashPassword(password);
    const userData = await db.addLocalUser(email_address, hashedPassword);
    
    try {
      const authData = {
        id: userData.id,
        email_address: userData.email_address,
        auth_method: 'local'
      };
      req.login(authData, function() {
        return res.status(201).json(userData);
      });
    } catch(err) {
      // Login failed; just return new user data
      return res.status(201).json(userData);
    }
  } catch(err) {
    res.status(500).send(
      'Registration failed. Please ensure you are providing the required data.'
    );
  }
});

router.get('/login', jsonParser, (req, res) => {
  res.status(404).send('Please make a valid POST request to log in.');
});

router.post('/login',
  jsonParser,
  passport.authenticate('local', { failureMessage: true }),
  function(req, res) {
    res.status(200).json({
      id: req.user.id,
      email_address: req.user.email_address,
      auth_method: req.user.auth_method
    });
  }
);

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.BACKEND_BASE_URL}/auth/google/redirect`
}, (accessToken, refreshToken, profile, done) => {
  // Xử lý profile người dùng
}));

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google', {
  successRedirect: `${process.env.FRONT_END_BASE_URL}/account`,
  failureRedirect: `${process.env.FRONT_END_BASE_URL}/login?googleAuthError=true`
}));

module.exports = router;
