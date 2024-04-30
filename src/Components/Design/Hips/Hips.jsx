import React from "react";

import styles from "../../../styles/Design/Hips.module.css";

import background from "./images/background.png";

import cube from "./images/cube.png";

const Hips = () => {
  return (
    <div className={styles.hips}>
      <div className={styles.background}>
        <img className={styles.background} src={background} alt="" />
      </div>
      <h1 className={styles.we_there_where}>МЫ ТАМ, ГДЕ:</h1>
      <div className={styles.main_block}>
        <div className={styles.block}>
          <img className={styles.cube} src={cube} alt="" />
          <p className={styles.paragraph}>
            Требуется высокое качество ремонтных работ
          </p>
        </div>
        <div className={styles.block}>
          <img className={styles.cube} src={cube} alt="" />
          <p className={styles.paragraph}>Нужно четко соблюсти Бюджет</p>
        </div>
        <div className={styles.block}>
          <img className={styles.cube} src={cube} alt="" />
          <p className={styles.paragraph}>
            Необходимо ответственно подойти к процессу
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hips;
