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
          {renderNavItem("/category/books", "Sách")}
          {renderNavItem("/category/electronics", "Điện tử")}
          {renderNavItem("/category/fashion", "Thời trang")}
          {renderNavItem("/category/home-kitchen", "Nhà cửa & Bếp núc")}
          {renderNavItem("/category/health-wellness", "Chăm sóc sức khỏe")}
          {renderNavItem("/category/automotive", "Xe cộ")}
          {renderNavItem("/category/others", "Khác")}
        </ul>
      </nav>
    </div>
  );
}