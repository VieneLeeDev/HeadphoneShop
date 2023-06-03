import styles from "./Login.module.css";
import icon_lock from "../../assets/icon/icon_lock.svg";
import icon_key from "../../assets/icon/icon_key.svg";
import icon_facebook from "../../assets/icon/icon_facebook.svg";
import icon_ins from "../../assets/icon/icon_ins.svg";
import icon_google from "../../assets/icon/icon_google.svg";
function Login({ handleShowModalLogin }) {
  return (
    <div className={styles["wrapper-login"]}>
      <div className={styles["main-form"]}>
        <div className={styles["logo-form"]}>
          <h2>ADMIN LOGIN</h2>
        </div>
        <div className={styles["input-login"]}>
          <div className={styles["main-input-box"]}>
            <div className={styles["backgroud-icon"]}>
              <img src={icon_lock} alt="" />
            </div>
            <input type="text"></input>
          </div>
          <div className={styles["main-input-box"]}>
            <div className={styles["backgroud-icon"]}>
              <img src={icon_key} alt="" />
            </div>
            <input type="password"></input>
          </div>
          <div className={styles["container-control"]}>
            <div className={styles["save-account"]}>
              <input type="checkbox"></input>
              <span> Remember Me </span>
            </div>
            <div className={styles["forgot-password"]}>
              <span> Forgot password? </span>
            </div>
          </div>
        </div>
        <div className={styles["box-icon-contact"]}>
          <img src={icon_ins} alt=""></img>
          <img src={icon_google} alt=""></img>
          <img src={icon_facebook} alt=""></img>
        </div>
        <div className={styles["button-control"]}>
          <div className={styles["link-login"]}>
            <button className={styles["main-link"]} to="/">
              {" "}
              Login
            </button>
          </div>
          <div className={styles["link-login"]}>
            <button
              onClick={handleShowModalLogin}
              className={styles["main-link"]}
            >
              {" "}
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
