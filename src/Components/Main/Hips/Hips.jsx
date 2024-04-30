import React, { Component } from "react";
import Items from "./Items";

import styles from "../../../styles/MainStyles/HipsStyles/Hips.module.css";

import arrow from "../Hips/images/nextarrow.png";

export default class Hips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          heading: "Квартира на Академической",
          paragraph: "Стиль - Лофт",
          size: "130 м2",
          image: "item (1).png",
          valueblock: true,
        },
        {
          id: 2,
          heading: "Квартира на Рижской",
          paragraph: "Стиль - Скандинавский",
          size: "94 м2",
          image: "item (2).png",
          valueblock: true,
        },
        {
          id: 3,
          heading: "Квартира на Чистых прудах",
          paragraph: "Стиль - Лофт",
          size: "68 м2",
          image: "item (3).png",
          valueblock: true,
        },
        {
          id: 4,
          heading: "Квартира на Рижской",
          paragraph: "Стиль - Скандинавский",
          size: "94 м2",
          image: "item (4).png",
          valueblock: true,
        },
        {
          id: 5,
          heading: "Квартира на Чистых прудах",
          paragraph: "Стиль - Лофт",
          size: "85 м2",
          image: "item (5).png",
          valueblock: true,
        },
        {
          id: 6,
          heading: "Квартира на Академической",
          paragraph: "Стиль - Лофт",
          size: "108 м2",
          image: "item (6).png",
          valueblock: true,
        },
      ],
    };

    this.color = {
      color: "red",
    };
  }

  render() {
    return (
      <div className={styles.hips}>
        <div className={styles.items}>
          <Items item={this.state.item} />
        </div>

        <h1 className={styles.us_projects}>НАШИ ПРОЕКТЫ</h1>
        <div className={styles.border_us_projects}></div>

        <div className={styles.background_block}></div>
        <button onClick={() => this.handleClick()} className={styles.button}>
          <img className={styles.arrow} src={arrow} alt="" />{" "}
          <span>Еще проекты</span>
        </button>

        <div className={styles.vertical_border_left}></div>
        <div className={styles.vertical_border_right}></div>
        <div className={styles.horizontal_border_top}></div>
        <div className={styles.horizontal_border_bottom}></div>
      </div>
    );
  }
}
