import styles from "./Category.module.css";
import { useEffect, useState } from "react";
import { apiGetListCategories } from "../../axios/api";
import axios from "axios";
import clsx from "clsx";
import Navbar from "../../components/Navbar/Navbar";
import item from "../../assets/img/item_001.webp";
const Category = () => {
  const [listCategories, setListCategories] = useState([]);
  useEffect(() => {
    axios
      .get(apiGetListCategories)
      .then((res) => {
        setListCategories(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className={clsx(styles.wrapper__category)}>
      <Navbar />
      <div className={clsx(styles.category__containers)}>
        <div className={clsx(styles.box__card)}>
          {/* table */}
          <table className={clsx(styles["table-card"])}>
            <tr className={styles.head__table_card}>
              <th className={styles.productdeletebtn}>delete</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            {listCategories.map((item) => {
              return (
                <tr>
                  <td className={styles.productdeletebtn}> X </td>
                  <td className={styles.productname}>{item.product}</td>
                  <td className={styles.productprice}>{item.price}</td>
                  <td className={styles.productquantity}>
                    <div className={styles.countquantity}>
                      <button className={styles.countbtn}> - </button>
                      <span className={styles.totalquantity}>
                        {" "}
                        {item.quantity}{" "}
                      </span>
                      <button className={styles.countbtn}> + </button>
                    </div>
                  </td>
                  <td className={styles.productsubtotal}>
                    {" "}
                    {item.price * item.quantity}{" "}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        {/* total */}
        <div className={clsx(styles.subtotal)}>
          <span className={styles.title__box}>CART TOTALS</span>
          <table className={styles.table__subtotal}>
            <tr>
              <th className={styles.subtotal_sigle_item}>Name</th>
              <td className={styles.info_subtotal_sigle_item}>
                <span>10000</span>
              </td>
            </tr>
            <tr>
              <th className={styles.shipping}>Shipping</th>
              <td className={styles.info_shipping}>
                <span>Free shipping</span>
              </td>
            </tr>
            <tr>
              <th className={styles.order_total}>Total</th>
              <td className={styles.info_order_total}>
                <span>270.00€</span>
              </td>
            </tr>
          </table>
          <button className={styles.checkout}>Proceed to checkout </button>
        </div>
      </div>
    </div>
  );
};
export default Category;
