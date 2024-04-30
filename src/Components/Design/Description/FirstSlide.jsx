import React from "react";

import styles from "../../../styles/Design/Description.module.css";

import image from "./image/image.png";

import image_right from "./image/image_right.png";

const FirstSlide = () => {
  return (
    <div className={styles.first_slide}>
      <div className={styles.left_block}>
        <img className={styles.image} src={image} alt="" />
        <h1 className={styles.name}>Ирина Иванова</h1>
        <h1 className={styles.role}>Владелица картиры в ЖК “Черемушки” </h1>
        <h1 className={styles.service}>
          Ремонт квартиры под ключ, с выбранным стилем - Лофт
        </h1>
        <h1 className={styles.paragraph}>
          Как принято считать, стремящиеся вытеснить традиционное производство,
          нанотехнологии могут быть своевременно верифицированы. Противоположная
          точка зрения подразумевает, что стремящиеся вытеснить традиционное
          производство, нанотехнологии, вне зависимости от их уровня, должны
          быть функционально разнесены на независимые элементы...
        </h1>
      </div>

      <div className={styles.right_block}>
        <img src={image_right} alt="" />
      </div>
    </div>
  );
};

export default FirstSlide;
