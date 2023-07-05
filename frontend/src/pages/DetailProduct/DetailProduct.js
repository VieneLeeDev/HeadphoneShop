import styles from "./DetailProduct.module.css";
import { products } from "../data";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import StarRating from "../../components/StarRating/StarRating";
function DetailProduct() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  return (
    <>
      <Navbar />
      <div className={styles["warrper-detail-product"]}>
        <div className={styles["container-detail-content"]}>
          <div className={styles["detail-left"]}>
            <img src={product.img} alt="" />
          </div>
          <div className={styles["detail-right"]}>
            <div className={styles["name_rate_containers"]}>
              <h1 className={styles["title-product-full"]}>
                {product.nameItem}
              </h1>{" "}
              <div className={styles["rate_product"]}>
                <div className={styles.box__rate}>
                  <StarRating />
                </div>
                <span className={styles.reviewers}> 120 Reviews</span>
              </div>
            </div>
            <p className={styles["description-product-full"]}>
              {product.description}
            </p>
            <div className={styles["control-detail-product-button"]}>
              <h2 className={styles["price-product"]}>
                {product.price + " VNĐ"}
              </h2>
              <button className={styles["btn-add"]}> Add To Card </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
