import React from "react";

import styles from "../../../styles/Design/Email.module.css";

import nicegirl from "./images/nicegirl.png";

const Email = () => {
  return (
    <div className={styles.email}>
      <div className={styles.block_left}>
        <h1 className={styles.heading}>ЕЩЕ НЕ ГОТОВЫ ЗАКАЗАТЬ РЕМОНТ?</h1>
        <div className={styles.border_box}></div>

        <img className={styles.nicegirl} src={nicegirl} alt="" />
      </div>

      <div className={styles.block_right}>
        <h1 className={styles.heading_email}>
          Оставьте ваш E-mail, чтобы получить каталог наших проектов
        </h1>

        <p className={styles.paragraph_email}>
          Каталог поможет вам выбрать стиль и продумать планировку квартиры
        </p>

        <input
          placeholder="Введите ваш E-mail"
          type="text"
          className={styles.input_email}
        />

        <div className={styles.checkbox}>
          <input className={styles.input_checkbox} type="checkbox" />
          <h1 className={styles.heading_checkbox}>
            Я согласен на <span>обработку персональных данных</span>
          </h1>
        </div>

        <button className={styles.button}>Получить каталог</button>
      </div>
    </div>
  );
};

export default Email;
