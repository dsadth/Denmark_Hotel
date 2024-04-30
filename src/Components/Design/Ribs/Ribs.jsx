import React from "react";
import styles from "../../../styles/Design/Ribs.module.css";
import SwiperS from "./Swiper";

const Ribs = () => {
  return (
    <div className={styles.ribs}>
      <div className={styles.swipers}>
        <SwiperS />
      </div>

      <button className={styles.button}>
        <span>Все работы</span>
      </button>

      <div className={styles.background_block}></div>

      <div className={styles.border}></div>

      <h1 className={styles.heading_work}>ПОРТФОЛИО</h1>

      <div className={styles.background_border}></div>

      <div className={styles.first_border}></div>
      <div className={styles.two_border}></div>
    </div>
  );
};

export default Ribs;
