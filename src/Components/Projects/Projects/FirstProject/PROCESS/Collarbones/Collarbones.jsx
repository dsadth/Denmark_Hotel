import React from "react";

import styles from "../../../../../../styles/ProjectsStyles/Projects/TwoProject/ProcessTwoProject/Collarbones.module.css";

import image_one from "./images/image (3).png";
import image_two from "./images/image (2).png";
import image_three from "./images/image (1).png";
import image_four from "./images/image (4).png";

const Collarbones = () => {
  return (
    <div className={styles.collarbones}>
      <div className={styles.block_image}>
        <div className={styles.image_one}>
          <img src={image_one} alt="" />
        </div>
        <div className={styles.image_two}>
          <img src={image_two} alt="" />
        </div>
        <div className={styles.image_three}>
          <img src={image_three} alt="" />
        </div>
        <div className={styles.image_four}>
          <img src={image_four} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Collarbones;
