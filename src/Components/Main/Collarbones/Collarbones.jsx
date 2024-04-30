import React from "react";

import styles from "../../../styles/MainStyles/CollarbonesStyles/Collarbones.module.css";

import square from "../../Main/Collarbones/images/square.png";

const Collarbones = () => {
  return (
    <div className={styles.collarbones}>
      <div className={styles.block_rec}>
        <div className={styles.tablets}>
          <h1 className={styles.heading}>100+</h1>
          <div className={styles.square_heading_two}>
            <img src={square} className={styles.square} alt="" />
            <h2 className={styles.heading_two}>Реализованные проекты</h2>
          </div>
          <p className={styles.paragraph}>
            Работаем с любой недвижимостью – от дворцов до квартир
          </p>
        </div>

        <div className={styles.tablets}>
          <h1 className={styles.heading}>10 лет</h1>
          <div className={styles.square_heading_two}>
            <img src={square} className={styles.square} alt="" />
            <h2 className={styles.heading_two}>Безупречная репутация</h2>
          </div>
          <p className={styles.paragraph}>
            Наши специалисты постоянно стажируются у лидеров строительных работ
          </p>
        </div>

        <div className={styles.tablets}>
          <h1 className={styles.heading}>3 года</h1>
          <div className={styles.square_heading_two}>
            <img src={square} className={styles.square} alt="" />
            <h2 className={styles.heading_two}>Гарантии на все работы</h2>
          </div>
          <p className={styles.paragraph}>
            Мы внимательно изучаем рынок отделочных материалов и инновационной
            техники
          </p>
        </div>

        <div className={styles.tablets}>
          <h1 className={styles.heading}>Сроки</h1>
          <div className={styles.square_heading_two}>
            <img src={square} className={styles.square} alt="" />
            <h2 className={styles.heading_two}>Процесс</h2>
          </div>
          <p className={styles.paragraph}>
            Нужно лучшее – закажи это у лучших!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collarbones;
