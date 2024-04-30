import React, { Component } from "react";
import Items from "./Items";

import styles from "../../../styles/Design/Blog.module.css";

import arrow from "./images/arrow.png";

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          date: "2021, Март",
          heading:
            "Как определить компетенцию дизайнера ничего не зная о дизайне интерьера?",
          paragraph:
            "Сегодня вопрос профессиональной подготовки дизайнеров интерьера весьма актуален. Существует множество...",
        },

        {
          id: 2,
          date: "2021, Январь",
          heading:
            "Как определить компетенцию дизайнера ничего не зная о дизайне интерьера?",
          paragraph:
            "Сегодня вопрос профессиональной подготовки дизайнеров интерьера весьма актуален. Существует множество...",
        },

        {
          id: 3,
          date: "2021, Март",
          heading:
            "Как определить компетенцию дизайнера ничего не зная о дизайне интерьера?",
          paragraph:
            "Сегодня вопрос профессиональной подготовки дизайнеров интерьера весьма актуален. Существует множество...",
        },

        {
          id: 4,
          date: "2021, Март",
          heading:
            "Как определить компетенцию дизайнера ничего не зная о дизайне интерьера?",
          paragraph:
            "Сегодня вопрос профессиональной подготовки дизайнеров интерьера весьма актуален. Существует множество...",
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.blog}>
        <div className={styles.block_heading}>
          <h1 className={styles.heading_heading}>НАШ БЛОГ</h1>
          <div className={styles.border}></div>
        </div>

        <div className={styles.middle_border}></div>

        <div className={styles.bottom_border}></div>

        <button className={styles.button_blog}>
          Перейти в блог <img src={arrow} alt="" />
        </button>

        <div className={styles.item_blog}>
          <Items item={this.state.item} />
        </div>
      </div>
    );
  }
}
