import React from "react";
import styles from "../../../styles/FixStyles/Neck.module.css";

import background from "./images/background.png";

import image_one from "./images/image (1).png";
import image_two from "./images/image (2).png";

import cube from "./images/cube.png";

const Neck = () => {
  return (
    <div className={styles.neck}>
      <div className={styles.background}>
        <h1 className={styles.heading}>Видео работы GID</h1>

        <div className={styles.image_block}>
          <img className={styles.image_one} src={image_one} alt="" />
          <img className={styles.image_two} src={image_two} alt="" />
        </div>
        <img src={background} alt="" />
      </div>

      <div className={styles.block_info}>
        <div className={styles.background_color}></div>
        <div className={styles.first_block}>
          <h1 className={styles.heading_info}>24/7</h1>
          <img className={styles.cube} src={cube} alt="" />
          <p className={styles.paragraph_info}>
            Ваш личный менеджер всегда на связи
          </p>
        </div>
        <div className={styles.two_block}>
          <h1 className={styles.heading_info}>Наблюдение</h1>
          <img className={styles.cube} src={cube} alt="" />
          <p className={styles.paragraph_info}>
            На объекте ведётся круглосуточное видеонаблюдение
          </p>
        </div>
        <div className={styles.three_block}>
          <h1 className={styles.heading_info}>7 лет</h1>
          <img className={styles.cube} src={cube} alt="" />
          <p className={styles.paragraph_info}>Гарантии на все работы</p>
        </div>
        <div className={styles.four_block}>
          <h1 className={styles.heading_info}>Документация</h1>
          <img className={styles.cube} src={cube} alt="" />
          <p className={styles.paragraph_info}>
            Подготовим и утвердим всю проектную документацию
          </p>
        </div>
      </div>
    </div>
  );
};

export default Neck;
