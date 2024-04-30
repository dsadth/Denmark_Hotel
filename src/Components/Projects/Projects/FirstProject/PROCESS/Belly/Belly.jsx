import React from "react";

import styles from "../../../../../../styles/ProjectsStyles/Projects/TwoProject/ProcessTwoProject/Belly.module.css";

import first_image from "./images/images (1).png";
import two_image from "./images/images (2).png";

import cloud_gray from "./images/cloud (1).png";
import cloud from "./images/cloud (2).png";

const Belly = () => {
  return (
    <div className={styles.belly}>
      <div className={styles.left_block}>
        <div className={styles.take_style_project}>
          <h1 className={styles.number_left_block_take_style_project}>03</h1>
          <h1 className={styles.heading_left_block_take_style_project}>
            3D визуализация проекта
          </h1>
          <h1 className={styles.heading_two_left_block_take_style_project}>
            Был выбран - Скандинавский стиль
          </h1>
          <h1 className={styles.paragraph_left_block_take_style_project}>
            Наши дизайнеры постарались выбрать самые современные элементы
            дизайна и мебель в стиле проекта под запросы клиента.
          </h1>
        </div>
      </div>

      <div className={styles.accept_ideas_to_projects}>
        <h1 className={styles.number_left_block_accept_ideas_to_projects}>
          04
        </h1>
        <h1 className={styles.heading_left_block_two_accept_ideas_to_projects}>
          Ремонт
        </h1>
        <h1 className={styles.heading_two_left_block_accept_ideas_to_projects}>
          Был выбран - Скандинавский стиль
        </h1>
        <h1 className={styles.paragraph_left_block_accept_ideas_to_projects}>
          Наши дизайнеры постарались выбрать самые современные элементы дизайна
          и мебель в стиле проекта под запросы клиента.
        </h1>
      </div>

      <div className={styles.middle_block}>
        <img src={first_image} alt="" />
        <img className={styles.two_image} src={two_image} alt="" />
      </div>

      <div className={styles.right_block}>
        <div className={styles.clouds_one}>
          <h1 className={styles.director}>Арт-директор</h1>

          <p className={styles.feedback_director}>
            Наши дизайнеры и мастера настоящие профессионалы. Уверены, Вы
            останетесь довольны результатом!
          </p>
          <img src={cloud_gray} alt="" />
        </div>

        <div className={styles.clouds_two}>
          <h1 className={styles.customer}>Заказчик</h1>
          <p className={styles.feedback}>
            Отличные визы. Очень нравятся! Надеюсь, так же будет и “в живую”))
          </p>
          <img src={cloud} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Belly;
