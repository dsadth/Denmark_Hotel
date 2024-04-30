import React from "react";

import styles from "../../../styles/MainStyles/RibsStyles/Ribs.module.css";

import rectangle from "../../Main/Ribs/images/Rectangle 56.png";

import square from "../../Main/Ribs/images/square.png";

const Ribs = () => {
  return (
    <div className={styles.ribs}>
      <h1 className={styles.price}>СТОИМОСТЬ ПРОЕКТА</h1>

      <div className={styles.ribs_border}></div>

      <div className={styles.ribs_block}>
        <h1 className={styles.see_price}>
          Узнайте стоимость дизайн-проекта, ответив на 3 вопроса
        </h1>
        <h1 className={styles.test}>
          Пройдите короткий тест, узнайте цену, получите консультацию по
          будущему проекту
        </h1>
        <button className={styles.look_price}>Узнать стоимость</button>
      </div>

      <div className={styles.block_right}>
        <div className={styles.block_top}>
          <img src={rectangle} alt="" />

          <h1 className={styles.heading}>Бонусы: </h1>

          <div className={styles.square_paragraph}>
            <img className={styles.square} src={square} alt="" />
            <p className={styles.paragraph}>
              чек листы на 5 ошибок в строительстве
            </p>
          </div>
        </div>
      </div>

      <div className={styles.block_bot}>
        <img className={styles.square_block_bot} src={square} alt="" />
        <p className={styles.paragraph_block_bot}>
          5 трендов 2021 года на дизайн интерьеров
        </p>
      </div>

      <div className={styles.belly}>
        <h1 className={styles.heading_services}>ОСНОВНЫЕ УСЛУГИ</h1>
        <div className={styles.border_block}></div>
      </div>
    </div>
  );
};

export default Ribs;
