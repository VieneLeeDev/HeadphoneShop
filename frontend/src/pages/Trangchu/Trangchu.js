import styles from "./Trangchu.module.css";
import { useState } from "react";
import Login from "../Login/Login";
import panner from "../../assets/img/panner.png";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { products } from "../data";

function Trangchu() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const handalShowModalLogin = () => {
    setShowModalLogin(!showModalLogin);
  };
  return (
    <div className={styles.wrapper}>
      <Navbar handleShowModalLogin={handalShowModalLogin} />
      {showModalLogin && <Login handleShowModalLogin={handalShowModalLogin} />}
      <div className={styles["wrapper-content"]}>
        <div className={styles["slider-content"]}>
          <img src={panner} alt="img item" />
        </div>
        <div className={styles["main-content"]}>
          <div className={styles["left-content-searching"]}>
            <div className={styles["check-box-container"]}>
              <div className={styles["title-checkbox"]}>
                <span>Giới tính</span>
              </div>
              <ul>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span>Nam </span>
                </li>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span>Nữ </span>
                </li>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span>Khác </span>
                </li>
              </ul>
            </div>
            <div className={styles["check-box-container"]}>
              <div className={styles["title-checkbox"]}>
                <span>Phong cách</span>
              </div>
              <ul>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span>Thể thao</span>
                </li>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span>Thời trang</span>
                </li>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span>Hiện đại</span>
                </li>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span>Cổ điển</span>
                </li>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span>Không dây (wireless)</span>
                </li>
              </ul>
            </div>
            <div className="check-box-container">
              <div className={styles["title-checkbox"]}>
                <span>Giá Thành</span>
              </div>
              <ul>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span>0 - 500.000đ</span>
                </li>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span>500.000đ - 1.500.000đ</span>
                </li>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span>1.500.000đ - 3.000.000đ</span>
                </li>
                <li className={styles["checkbox-content"]}>
                  <input type="checkbox" />
                  <span> &#62; 3.000.000đ</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["title-right-content"]}>
              <span> Sản Phẩm Nổi Bật</span>
            </div>
            <div className={styles["main-item"]}>
              {/* show item  */}
              {products.map((item, index) => {
                return (
                  <Card
                    key={index}
                    id={item.id}
                    nameItem={item.nameItem}
                    description={item.description}
                    price={item.price}
                    img={item.img}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles["footer"]}>
        <div className={styles["contact"]}>
          <p>Designed in LeVien | Made in VietNam | Shipped from Chicago</p>
          <p>© 2023 Kickheadphone America | Site by SoWal Design</p>
        </div>
      </div>
    </div>
  );
}
export default Trangchu;
