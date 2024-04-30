import React from "react";

import styles from "../../../../../../styles/ProjectsStyles/Projects/TwoProject/ProcessTwoProject/Legs.module.css";
import GetService from "./GetServices";

const Legs = () => {
  return (
    <div className={styles.legs}>
      <div className={styles.button_block}>
        <button className={styles.button}>Описание</button>
        <button className={styles.button}>Процесс</button>
      </div>

      <div className={styles.GetService}>
        <GetService />
      </div>
    </div>
  );
};

export default Legs;
