import React, { Component } from "react";

import styles from "../../../styles/MainStyles/KneesStyles/Knees.module.css";
import Item from "./Item";
import Items from "./Items";

import arrow from "./images/arrow.png";

import borderV from "./images/vertical.png";
import borderH from "./images/horizontal.png";

export default class Knees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          number: "01",
          image: "FirstImage.png",
          heading: "Заявка",
          paragraph:
            "Оставляйте заявку на сайте и получите 2 варианта планировки квартиры БЕСПЛАТНО",
          point_image: "PointImage.png",
          point_background: "PointBackground.png",
          paragraph_point: "Оставить заявку",
        },
        {
          id: 2,
          number: "02",
          image: "TwoImage.png",
          heading: "Дизайн",
          paragraph: "Собираете на сайте стиль из четырех готовых решений",
          paragraph_two: "с возможностью редактирования",
          point_image: "PointImage.png",
          point_background: "PointBackground.png",
          paragraph_point: "Выбрать дизайн",
        },
        {
          id: 3,
          number: "03",
          image: "ThreeImage.png",
          heading: "Расчет",
          paragraph: "Расчитываете финальную стоимость ремонта с помощью",
          paragraph_two: "онлайн-калькулятора",
          point_image: "PointImage.png",
          point_background: "PointBackground.png",
          paragraph_point: "Посчитать",
        },
        {
          id: 4,
          number: "04",
          image: "FourImage.png",
          heading: "Договор",
          paragraph: "Собираете на сайте стиль из четырех готовых решений",
          paragraph_two: "с возможностью редактирования",
          point_image: "PointImage.png",
          point_background: "PointBackground.png",
          paragraph_point: "Оставить заявку",
        },
        {
          id: 5,
          number: "05",
          image: "FiveImage.png",
          heading: "Ремонт",
          paragraph: "Собираете на сайте стиль из четырех готовых решений",
          paragraph_two: "с возможностью редактирования",
          point_image: "PointImage.png",
          point_background: "PointBackground.png",
          paragraph_point: "Оставить заявку",
        },
        {
          id: 6,
          number: "06",
          image: "SixImage.png",
          heading_six: "Сдача объекта",
          paragraph: "Расчитываете финальную стоимость ремонта с помощью",
          paragraph_two: "онлайн-калькулятора",
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.knees}>
        <div className={styles.items_block}>
          <Items item={this.state.item} />
        </div>

        <div className={styles.border_six_steps}></div>

        <h1 className={styles.six_steps}>
          6 ЭТАПОВ ОТ ЗАЯВКИ ДО СДАЧИ ГОТОВОГО ОБЪЕКТА
        </h1>

        <div className={styles.heading_six_background}></div>

        <img className={styles.horizontal} src={borderH} alt="" />

        <img className={styles.verticalOne} src={borderV} alt="" />
        <img className={styles.verticalTwo} src={borderV} alt="" />
        <img className={styles.verticalThree} src={borderV} alt="" />

        <button className={styles.button}>
          Начать <img className={styles.arrow} src={arrow} alt="" />
        </button>
      </div>
    );
  }
}
