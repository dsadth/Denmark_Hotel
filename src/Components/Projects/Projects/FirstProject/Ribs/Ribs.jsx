import React from "react";

import styles from "../../../../../styles/ProjectsStyles/Projects/TwoProject/Description/Ribs.module.css";

import first_image from "../image/Ribs/images (1).png";
import two_image from "../image/Ribs/images (2).png";
import three_image from "../image/Ribs/images (3).png";

const Ribs = () => {
  return (
    <div className={styles.ribs}>
      <div className={styles.image_first}>
        <img src={first_image} alt="" />
      </div>
      <div className={styles.image_two}>
        <img src={two_image} alt="" />
      </div>
      <div className={styles.image_three}>
        <img src={three_image} alt="" />
      </div>
    </div>
  );
};

export default Ribs;
