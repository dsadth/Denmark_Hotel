import React, { Component } from "react";

import styles from "../../../styles/FixStyles/Hips.module.css";

import image_one from "./images/image (4).png";
import image_two from "./images/image (1).png";
import image_three from "./images/image (3).png";
import image_four from "./images/image (2).png";

import arrow from "./images/arrow.png";

import Items from "./Items";

export default class Hips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          image: "",
          heading: "Александр Троицкий",
          paragraph: "Арт-директор GID",
          description: "20 лет в ремонтной компании. Курирует крупные проекты.",
        },
        {
          id: 2,
          image: "",
          heading: "Александр Троицкий",
          paragraph: "Дизайнер GID",
          description: "20 лет в ремонтной компании. Курирует крупные проекты.",
        },
        {
          id: 3,
          image: "",
          heading: "Маргарита Тимосян",
          paragraph: "3D-визуализатор GID",
          description: "20 лет в ремонтной компании. Курирует крупные проекты.",
        },
        {
          id: 4,
          image: "",
          heading: "Александр Троицкий",
          paragraph: "Прораб GID",
          description: "20 лет в ремонтной компании. Курирует крупные проекты.",
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.hips}>
        <Items item={this.state.item} />

        <button className={styles.button}>
          {" "}
          <img className={styles.arrow} src={arrow} alt="" />{" "}
          <span> Еще сотрудники</span>
        </button>
      </div>
    );
  }
}
