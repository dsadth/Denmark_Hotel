import React from "react";

import styles from "../../../styles/Design/Legs.module.css";

import first_image from "./images/image (1).png";
import image_two from "./images/image (3).png";
import image_three from "./images/image (2).png";
import image_four from "./images/image (4).png";

const Legs = () => {
  return (
    <div className={styles.legs}>
      <div className={styles.heading_block}>
        <h1 className={styles.legs_heading}>ЧТО ВЫ ПОЛУЧИТЕ</h1>
        <div className={styles.border}></div>
      </div>

      <div className={styles.block}>
        <div className={styles.block_card}>
          <img className={styles.image} src={first_image} alt="" />
          <h1 className={styles.heading}>Функциональность</h1>
        </div>
        <div className={styles.block_card}>
          <img className={styles.image} src={image_two} alt="" />
          <h1 className={styles.heading}>Эстетику</h1>
        </div>
        <div className={styles.block_card}>
          <img className={styles.image} src={image_three} alt="" />
          <h1 className={styles.heading}>Качественный ремонт</h1>
        </div>
        <div className={styles.block_card}>
          <img className={styles.image} src={image_four} alt="" />
          <h1 className={styles.heading}>Уникальные условия</h1>
        </div>
      </div>
    </div>
  );
};

export default Legs;
