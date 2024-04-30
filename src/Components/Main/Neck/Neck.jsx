import React from "react";
import styles from "../../../styles/MainStyles/NeckStyles/Neck.module.css";

const Neck = () => {
  return (
    <div className={styles.neck}>
      <div className={styles.background}></div>

      <h1 className={styles.bestofbest}>Лучшее для лучших</h1>

      <div className={styles.buttons}>
        <button className={styles.button_project}>Проекты</button>

        <button className={styles.button_price}>Расчитать стоимость</button>
      </div>
    </div>
  );
};

export default Neck;
