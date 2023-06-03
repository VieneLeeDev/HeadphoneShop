import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import clsx  from "clsx";
import search_icon from "../../assets/icon/search_icon.svg";
import styles from "./Navbar.module.css";
import icon_category from "../../assets/icon/icon_category.jpg";
function Navbar({ handleShowModalLogin }) {
  return (
    <div className={styles["header"]}>
      <div className={styles["logo-navigation"]}>
        <img src={logo} alt="logo"></img>
      </div>
      <div className={styles["top-navigation-main"]}>
        <div className={styles["main-navigation"]}>
          <Link to={"/"} className={styles["top-level-entry"]}>
            Trang Chủ
          </Link>
          <Link to={"/congdong"} className={styles["top-level-entry"]}>
            Cộng Đồng
          </Link>
          <Link to={"/thamkhao"} className={styles["top-level-entry"]}>
            Tham Khảo
          </Link>
        </div>
        <div className={styles["search-input-box"]}>
          <input className={styles["search-input-field"]}></input>
          <img src={search_icon} alt="icon search"></img>
        </div>
        <div className={styles["box-button-login"]}>
          <button
            onClick={handleShowModalLogin}
            className={styles["login-button"]}
          >
            {" "}
            Đăng Nhập
          </button>
          <button className={styles["login-button"]}> Đăng Ký </button>
          <Link to="/Category" className={clsx( styles.category)}>
            {" "}
            <img src={icon_category} alt="" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
