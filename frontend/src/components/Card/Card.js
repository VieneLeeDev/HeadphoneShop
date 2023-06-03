import React from "react";
import { Link } from "react-router-dom";
import styles from  "../Card/Card.module.css";
function Card({ id, nameItem, description, price, img }) {
  return (
    <div className={styles["container-card"]} >
      <Link to={`/DetailProduct/${id}`} className={styles["link-router"]}>
        <div className={styles["img-item"]}>
          <img src={img} alt="item"></img>
        </div>
        <div className={styles["info-item"]}>
          <span className={styles["title-item"]}> {nameItem}</span>
          <p className={styles["decription-item"]}>{description}</p>
          <span className={styles["price-item"]}>{price}</span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
