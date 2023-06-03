import { useState } from "react";
import clsx from "clsx";
import styles from "./StarRating.module.css";
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const handleGetRating = (index) => {
    setRating(index);
  };
  const style_container = clsx(styles.StarRating__Container);
  return (
    <div className={style_container}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={clsx(
              styles.main__star,
              index <= rating ? styles["on"] : styles["off"]
            )}
            onClick={() => handleGetRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
