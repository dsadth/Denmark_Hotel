import React from "react";

import styles from "../../../../../styles/ProjectsStyles/Projects/TwoProject/Description/Belly.module.css";

import first_image from "../image/Belly/image (1).png";
import two_image from "../image/Belly/image (2).png";
import three_image from "../image/Belly/image (3).png";
import big_image from "../image/Belly/image.png";

const Belly = () => {
  return (
    <div className={styles.belly}>
      <div className={styles.left_block}>
        <h1 className={styles.left_heading}>
          Современная кухня в Скандинавском стиле
        </h1>
      </div>

      <div className={styles.border}></div>
      <div className={styles.right_block}>
        <h1 className={styles.heading}>
          Идейные соображения высшего порядка, а также внедрение современных
          методик обеспечивает актуальность глубокомысленных рассуждений. Мы
          вынуждены отталкиваться от того, что глубокий уровень погружения, в
          своём классическом представлении, допускает внедрение своевременного
          выполнения сверхзадачи.
        </h1>

        <h1 className={styles.heading_two}>
          {" "}
          Мы вынуждены отталкиваться от того, что глубокий уровень погружения, в
          своём классическом представлении, допускает внедрение своевременного
          выполнения сверхзадачи.
        </h1>
      </div>

      <div className={styles.block_images}>
        <div className={styles.image_first}>
          <img src={first_image} alt="" />
        </div>

        <div className={styles.image_three}>
          <img src={three_image} alt="" />
        </div>

        <div className={styles.image_two}>
          <img src={two_image} alt="" />
        </div>

        <div className={styles.image_four}>
          <img src={big_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Belly;
