import React from "react";

import styles from "../../../styles/Contacts/Collarbones.module.css";

const Collarbones = () => {
  return (
    <div className={styles.collarbones}>
      <div className={styles.collarbones_block}>
        <h1 className={styles.heading}>Свяжитесь с нами</h1>

        <div className={styles.inputs_left_block}>
          <h1 className={styles.heading_input}>Имя</h1>
          <input
            className={styles.input}
            placeholder="Укажите ваше имя"
            type="text"
          />
          <h1 className={styles.heading_input}>Номер телефона</h1>
          <input
            className={styles.input}
            placeholder="Укажите ваш номер телефона"
            type="text"
          />
          <h1 className={styles.heading_input}>Площадь объекта</h1>
          <input className={styles.input} placeholder="м2" type="text" />
        </div>

        <div className={styles.right_block}>
          <h1 className={styles.heading_right_block}>Комментарии</h1>

          <input
            placeholder="Введите текст"
            className={styles.description}
            type="text"
          />

          <button className={styles.button}>Отправить</button>
        </div>
      </div>
      <input className={styles.checkbox} type="checkbox" />
      <h1 className={styles.heading_checkbox}>Я согласен на обработку персональных данных</h1>
    </div>
  );
};

export default Collarbones;
