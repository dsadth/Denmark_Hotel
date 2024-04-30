import React from "react";

import styles from "../../../../../styles/ProjectsStyles/Projects/TwoProject/Description/Neck.module.css";

import background from "../image/background.png";

const Neck = () => {
  return (
    <div>
      <div className={styles.two_project_neck}>
        <img src={background} alt="" />
      </div>

      <div className={styles.background_opacity}></div>
      <div className={styles.project_info}>
        <h1 className={styles.heading_info}>Квартира на Рижской</h1>
        <h2 className={styles.paragraph}>ЖК - “Чистые пруды”</h2>
        <p className={styles.size}>94 м2</p>
        <h1 className={styles.name_designer}>
          Дизайнер - <span>Андрей Иванов</span>
        </h1>
      </div>
    </div>
  );
};

export default Neck;
