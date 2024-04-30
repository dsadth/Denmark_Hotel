import React from "react";

import styles from "../../../../../styles/ProjectsStyles/Projects/TwoProject/Description/Collarbones.module.css";

const Collarbones = () => {
  return (
    <div className={styles.collarbones}>
      <div className={styles.block_info}>
        <div className={styles.left_block}>
          <h1 className={styles.heading}>Квартира на Рижской</h1>

          <p className={styles.paragraph}>Стиль - Скандинавский</p>

          <h2 className={styles.size}>94 м2</h2>

        </div>

        <div className={styles.border_left_block}></div>

        <div className={styles.right_block}>
          <h1 className={styles.heading_right_block_info}>
            Идейные соображения высшего порядка, а также внедрение современных
            методик обеспечивает актуальность глубокомысленных рассуждений. Мы
            вынуждены отталкиваться от того, что глубокий уровень погружения, в
            своём классическом представлении, допускает внедрение своевременного
            выполнения сверхзадачи.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Collarbones;
