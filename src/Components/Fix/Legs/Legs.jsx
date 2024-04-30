import React, { Component } from "react";

import styles from "../../../styles/FixStyles/Legs.module.css";
import Items from "./Items";

export default class Legs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          image: "",
          paragraph:
            "Полностью готовый ремонт “под ключ” (с соблюдением всех сроков и бюджета)",
          background_block: "",
        },
        {
          id: 2,
          image: "",
          paragraph: "Сохраненное время и нервы",
          background_none_block: "",
        },
        {
          id: 3,
          image: "",
          paragraph: "Гарантия на ремонт до 6 лет",
          background_none_block: "",
        },
        {
          id: 4,
          image: "",
          paragraph: "Рекомендации друзьям",
          background_block: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.legs}>
        <div className={styles.block_heading}>
          <h1 className={styles.heading_heading}>РЕЗУЛЬТАТ</h1>

          <div className={styles.border}></div>
        </div>

        <div className={styles.block_item_legs}>
          <div className={styles.block_background}></div>

          <div className={styles.block_background_two}></div>

          <Items item={this.state.item} />
        </div>
      </div>
    );
  }
}
