import React from "react";

import styles from "../../../../../../styles/ProjectsStyles/Projects/TwoProject/ProcessTwoProject/Neck.module.css";

import first_image from "./image/image (1).png";
import two_image from "./image/image (2).png";

import cloud from "./image/cloud.png";
import cloud_gray from "./image/cloud_gray.png";

const Neck = () => {
  return (
    <div className={styles.neck}>
      <div className={styles.left_block}>
        <div className={styles.take_style_project}>
          <h1 className={styles.number_left_block_take_style_project}>01</h1>
          <h1 className={styles.heading_left_block_take_style_project}>
            Выбор стиля проекта
          </h1>
          <h1 className={styles.heading_two_left_block_take_style_project}>
            Был выбран - Скандинавский стиль
          </h1>
          <h1 className={styles.paragraph_left_block_take_style_project}>
            Наши дизайнеры постарались выбрать самые современные элементы
            дизайна и мебель в стиле проекта под запросы клиента.
          </h1>
        </div>

        <div className={styles.accept_ideas_to_projects}>
          <h1 className={styles.number_left_block_accept_ideas_to_projects}>
            02
          </h1>
          <h1
            className={styles.heading_left_block_two_accept_ideas_to_projects}
          >
            Чертежи и согласованиe с закачиком идей по проекту
          </h1>
          <h1
            className={styles.heading_two_left_block_accept_ideas_to_projects}
          >
            Был выбран - Скандинавский стиль
          </h1>
          <h1 className={styles.paragraph_left_block_accept_ideas_to_projects}>
            Наши дизайнеры постарались выбрать самые современные элементы
            дизайна и мебель в стиле проекта под запросы клиента.
          </h1>
        </div>
      </div>

      <div className={styles.middle_block}>
        <img src={first_image} alt="" />
        <img className={styles.two_image} src={two_image} alt="" />
      </div>

      <div className={styles.right_block}>
        
        <div className={styles.clouds_one}>
          <h1 className={styles.customer}>Заказчик</h1>

          <p className={styles.feedback}>
            Хочется видеть смешение цветов - зелёного, серого и черного в
            дизайне. Уж больно нравятся такие цвета))
          </p>
          <img src={cloud} alt="" />
        </div>

        <div className={styles.clouds_two}>
          <h1 className={styles.customer}>Заказчик</h1>
          <p className={styles.feedback}>
            Да, утверждаем выбранные идеи по стилю проекта!
          </p>
          <img src={cloud} alt="" />
        </div>

        
      </div>
    </div>
  );
};

export default Neck;
