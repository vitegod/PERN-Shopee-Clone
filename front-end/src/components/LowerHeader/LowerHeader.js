import { NavLink, useNavigate, useRouteLoaderData } from "react-router-dom";
import styles from "./LowerHeader.module.css";


export default function LowerHeader() {

  function renderNavItem(path, anchor, onClick=null) {
    return (
      <li className={styles.listItem}>
        <NavLink to={path} className={styles.link} onClick={onClick}>{anchor}</NavLink>
      </li>
    );
  }

  return (
    <div className={styles.header}>
      <nav className={styles.mainNav}>
        <ul className={styles.navList}>
          {renderNavItem("/category/books", "Books")}
          {renderNavItem("/category/movies", "Movies")}
          {renderNavItem("/category/vehicles", "Vehicles")}
          {renderNavItem("/category/clothing", "Clothing")}
          {renderNavItem("/category/furniture", "Furniture")}
        </ul>
      </nav>
    </div>
  );
}