# PERN-Shopee-Clone
 Viet Nguyen Hoang's Shopee Clone PERN Fullstack Website
 ## Local Deployment

**Prerequisites**

* **Node.js and npm:** Ensure you have Node.js and npm installed. You can download them from [https://nodejs.org/](https://nodejs.org/).
* **PostgreSQL:** Set up a PostgreSQL database. You can download it from [https://www.postgresql.org/](https://www.postgresql.org/).

**Steps**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vitegod/PERN-Shopee-Clone
   ```
   
2. **Navigate to the project directories:**
   ```bash
   cd PERN-Shopee-Clone/back-end 
   cd PERN-Shopee-Clone/front-end
   ```
   
3. **Install dependencies:**
   ```bash
   # In the back-end directory
   npm install
   
   # In the front-end directory
   npm install
   ```
   
4. **Set up environment variables:**

   * Back-end:
   
   Create a .env file in the back-end directory.
   Refer to the Entity-relationship-model-reports.drawio.pdf (if available) or the project's database setup for the required environment variables (e.g., database connection details, any API keys, etc.).
   
   * Front-end:
   
   Create a .env file in the front-end directory.
   Set the necessary environment variables (e.g., API endpoint URL for connecting to the back-end).
   
5. **Run the project:**
   ```bash
   # In the back-end directory
   npm run dev 
   
   # In the front-end directory
   npm run dev
   ```
