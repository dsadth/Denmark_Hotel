import React from "react";

import styles from "../../../styles/MainStyles/LegsStyles/Legs.module.css";

import background from "./images/background.png";

const Legs = () => {
  return (
    <div className={styles.legs}>


      <div className={styles.background}>
        <img src={background} alt="" />
      </div>


      <h1 className={styles.heading}>МЫ ТАМ, ГДЕ:</h1>


      <div className={styles.blocks}>
        <div className={styles.white_block}></div>
        <div className={styles.white_block}></div>
        <div className={styles.white_block}></div>
      </div>


      <div className={styles.paragraph_block}>
        <p className={styles.paragraph}>
          Требуется высокое качество ремонтных работ
        </p>


        <p className={styles.paragraph}>Нужно четко соблюсти Бюджет </p>


        <p className={styles.paragraph}>
          Необходимо ответственно подойти к процессу
        </p>


      </div>
    </div>
  );
};

export default Legs;
