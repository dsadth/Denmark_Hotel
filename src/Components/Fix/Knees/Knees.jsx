import React, { Component } from "react";

import styles from "../../../styles/FixStyles/Knees.module.css";
import Items from "./Items";

import line from "./images/line.png";

import linetwo from "./images/linetwo.png";

import arrow from "./images/arrow.png";

export default class Knees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [
        {
          id: 1,
          number: "01",
          image: "image (4).png",
          heading: "Черновой",
          paragraph: "Работы по демонтажу, штукатурке, стяжке и другие",
          small_block: "",
        },
        {
          id: 2,
          number: "02",
          image: "",
          heading: "Инженерные работы",
          paragraph:
            "Электротехнические работы, отопление, водоснабжение и другие",
          block: "",
        },
        {
          id: 3,
          number: "03",
          image: "",
          heading: "Предчистовая отделка",
          paragraph:
            "Гипсокартонные работы, шпатлевка, напольные покрытия и другое",
          block: "",
        },
        {
          id: 4,
          number: "04",
          image: "",
          heading: "Чистовая отделка",
          paragraph: "Монтаж и декоративные покрытия",
          block: "",
        },
        {
          id: 5,
          number: "05",
          image: "",
          heading: "Заключительный этап",
          paragraph: "Меблировка, декорирование и клининг",
          block: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.knees}>
        <div className={styles.heading_border_block}>
          <h1 className={styles.heading_border}>ЭТАПЫ ВОПОЛНЕНИЯ РАБОТ</h1>
          <div className={styles.border}></div>
        </div>
        <img className={styles.line} src={line} alt="" />
        <img className={styles.linetwo} src={linetwo} alt="" />
        <img className={styles.linetwotwo} src={linetwo} alt="" />
        <img className={styles.linetwothree} src={linetwo} alt="" />

        <button className={styles.button}>
          Начать <img className={styles.arrow} src={arrow} alt="" />
        </button>

        <Items item={this.state.item} />
      </div>
    );
  }
}
