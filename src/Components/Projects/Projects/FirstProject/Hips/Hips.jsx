import React from "react";

import styles from "../../../../../styles/ProjectsStyles/Projects/TwoProject/Description/Hips.module.css";
import GetService from "./GetService";

const Hips = () => {
  return (
    <div className={styles.hips}>
      <div className={styles.top_block}>
        <div className={styles.left_block}>
          <h1 className={styles.heading_left_block}>
            Уютная спальня <br />с личным просторным гардеробом
          </h1>
        </div>

        <div className={styles.border}></div>

        <div className={styles.right_block}>
          <h1 className={styles.heading_right_block}>
            Идейные соображения высшего порядка, а также внедрение современных
            методик обеспечивает актуальность глубокомысленных рассуждений. Мы
            вынуждены отталкиваться от того, что глубокий уровень погружения, в
            своём классическом представлении, допускает внедрение своевременного
            выполнения сверхзадачи.
          </h1>

          <h1 className={styles.heading_bottom_right_block}>
            Мы вынуждены отталкиваться от того, что глубокий уровень погружения,
            в своём классическом представлении, допускает внедрение
            своевременного выполнения сверхзадачи.
          </h1>
        </div>
      </div>

      <div className={styles.button_block}>
        <button className={styles.button}>Описание</button>
        <button className={styles.button}>Процесс</button>
      </div>

      <GetService />
    </div>
  );
};

export default Hips;
