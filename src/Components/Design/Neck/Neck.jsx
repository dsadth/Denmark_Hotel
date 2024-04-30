import React from "react";

import styles from "../../../styles/Design/Neck.module.css";

import cube from "./images/cube.png";
import eight from "./images/eight.png";
import background from "./images/background.png";

const Neck = () => {
  return (
    <div className={styles.neck}>
      <h1 className={styles.heading}>3D-дизайн</h1>
      <div className={styles.background}>
        <img src={background} alt="" />
      </div>

      <div className={styles.block_info}>
        <div className={styles.background_color}></div>
        <div className={styles.first_block}>
          <h1 className={styles.number_heading_info}>25</h1>
          <h1 className={styles.heading_info}>проектов</h1>
          <img className={styles.cube} src={cube} alt="" />
          <p className={styles.paragraph_info}>
            Сделали за прошлый год. Все - уникальны.
          </p>
        </div>
        <div className={styles.two_block}>
          <h1 className={styles.number_heading_info}>37</h1>
          <h1 className={styles.heading_info}>Лет</h1>
          <img className={styles.cube} src={cube} alt="" />
          <p className={styles.paragraph_info}>
            Суммарный опыт специалистов студии в дизайне
          </p>
        </div>
        <div className={styles.three_block}>
          <h1 className={styles.number_heading_info}>30</h1>
          <h1 className={styles.heading_info}>млн. руб.</h1>
          <img className={styles.cube} src={cube} alt="" />
          <p className={styles.paragraph_info}>
            Сумма, сэкономленная клиентам при закупке мебели
          </p>
        </div>
        <div className={styles.four_block}>
          <img className={styles.eight} src={eight} alt="" />
          <img className={styles.cube} src={cube} alt="" />
          <p className={styles.paragraph_info}>
            Удовольствие от возможности взять всё под свой контроль.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Neck;
