import React from "react";

import styles from "../../../../../../styles/ProjectsStyles/Projects/TwoProject/ProcessTwoProject/Hips.module.css";

import first_big_image from "./image/image (4).png";
import two_big_image from "./image/image (7).png";
import first_image from "./image/image (5).png";
import two_image from "./image/image (6).png";
import three_image from "./image/image (1).png";
import four_image from "./image/image (3).png";
import five_image from "./image/image (2).png";

const Hips = () => {
  return (
    <div className={styles.hips}>
      <div className={styles.image_block}>
        <div className={styles.first_block}>
          <img className={styles.image} src={first_image} alt="" />
          <img className={styles.image} src={two_image} alt="" />
        </div>

        <div className={styles.big_two_block}>
          <img className={styles.big_image} src={first_big_image} alt="" />
        </div>

        <div className={styles.three_block}>
          <img className={styles.image} src={three_image} alt="" />
          <img className={styles.image} src={four_image} alt="" />
          <img className={styles.image} src={five_image} alt="" />
        </div>

        <div className={styles.big_four_block}>
          <img className={styles.big_image} src={two_big_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hips;
