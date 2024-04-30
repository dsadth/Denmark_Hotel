import React, { Component } from "react";
import Items from "./Items";

import styles from "../../../styles/FixStyles/Collarbones.module.css";

export default class Collarbones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          image: "firstimage.png",
          cube: "cube.png",
          heading: 'Тариф "со своим дизайн проектом"',
          paragraph: "Ваш дизайн проект Наш ремонт",
        },
        {
          id: 2,
          image: "firstimage.png",
          cube: "cube.png",
          heading: 'Тариф "ремонт под ключ""',
          paragraph_first_two: "Планировочное решение",
          paragraph_two: "Дизайн-концепция",
          paragraph_three: "3Д Визуализации",
          paragraph_four: "Подбор материалов",
          paragraph_five: " Строительные чертежи",
          paragraph_six: " Строительные чертежи",
        },
        {
          id: 3,
          image: "firstimage.png",
          cube: "cube.png",
          heading: 'Тариф "все включено""',
          paragraph_first_three: "Планировочное решение",
          paragraph_two: "Дизайн-концепция",
          paragraph_three: "3Д Визуализации",
          paragraph_four: "Строительные чертежи",
          paragraph_five: " Подбор материалов",
          paragraph_six: " Ремонт объекта ",
          paragraph_seven: "Организация поставки мебели и материалов ",
          paragraph_eight: "Финальное декорирование",
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.collarbones}>
        <Items item={this.state.item} />


        <div className={styles.background_border}>
        <div className={styles.first_border}></div>
        <div className={styles.two_border}></div>
        <div className={styles.three_border}></div>
      </div>
      </div>
    );
  }
}
