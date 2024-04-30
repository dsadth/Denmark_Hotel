import React from "react";

import styles from "../../../../../../styles/ProjectsStyles/Projects/TwoProject/ProcessTwoProject/Knees.module.css";

import cloud from "./images/cloud (1).png";
import cloud_two from "./images/cloud (2).png";

import pause from "./images/pause.png";
import play from "./images/play.png";

import image from "./images/image.png";

const Knees = () => {
  return (
    <div className={styles.knees}>
      <div className={styles.left_block}>
        <div className={styles.take_style_project}>
          <h1 className={styles.number_left_block_take_style_project}>05</h1>
          <h1 className={styles.heading_left_block_take_style_project}>
            Сдача готового объекта
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

      <div className={styles.middle_block}>
        <div className={styles.opacity_image}></div>

        <div className={styles.play_pause_block}>
          <img className={styles.pause} src={pause} alt="" />
          <img className={styles.play} src={play} alt="" />
        </div>
        <img src={image} alt="" />
      </div>

      <div className={styles.right_block}>
        <div className={styles.clouds_one}>
          <h1 className={styles.director}>Арт-директор</h1>

          <p className={styles.feedback_director}>
            Наши дизайнеры и мастера настоящие профессионалы. Уверены, Вы
            останетесь довольны результатом!
          </p>
          <img src={cloud_two} alt="" />
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

export default Knees;
