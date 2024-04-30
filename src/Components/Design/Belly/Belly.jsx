import React from "react";

import styles from "../../../styles/Design/Belly.module.css";

import cube from "./images/cube.png";

const Belly = () => {
  return (
    <div className={styles.belly}>
      <div className={styles.heading_block}>
        <h1 className={styles.heading}>ДЛЯ КОГО ЭТО</h1>
        <div className={styles.border}></div>
      </div>

      <div className={styles.main_block}>
        <div className={styles.belly_heading_block}>
          Мы делаем дизайн интерьеров для людей, которые хотят доверить нам весь
          процесс: дизайн-проект, ремонт, закупку материалов и мебели.
        </div>

        <div className={styles.blocks}>
          <img src={cube} alt="" />

          <h1 className={styles.heading_blocks}>Для тех, кто ценит эстетику</h1>

          <p className={styles.heading_paragraph}>
            Ежегодно посещаем зарубежные выставки, поэтому используем последние
            мировые тенденции в дизайне. Работаем только с проверенными
            решениями.
          </p>
        </div>

        <div className={styles.blocks}>
          <img src={cube} alt="" />

          <h1 className={styles.heading_blocks}>Кому важна экспертность</h1>
          <p className={styles.heading_paragraph}>
            В процессе работы над дизайн-проектом мы консультируемся с опытными
            строителями, чтобы получить технически реализуемые решения.
          </p>
        </div>
        <div className={styles.blocks}>
          <img src={cube} alt="" />

          <h1 className={styles.heading_blocks}>Кому нужен тройной контроль</h1>

          <p className={styles.heading_paragraph}>
            На каждый проект назначается группа из пяти человек. Это позволяет
            выдержать сроки, учесть нюансы, не упустить детали и досконально
            продумать интерьер.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Belly;
