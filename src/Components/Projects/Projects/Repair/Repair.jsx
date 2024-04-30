import React, { Component } from "react";

import styles from "./../../../../styles/ProjectsStyles/RepairStyles/Repair.module.css";
import Items from "./Items";
import Header from "../../../Header/Header";
import { Link } from "react-router-dom";
import Projects from "../Projects";

import reload from "./image/reload.png";
import GetService from "./GetService/GetService";
import Footer from "../../../Main/Footer/Footer";

export default class Repair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          image: "FirstBlock (4).png",
          heading: "Квартира на Академической",
          style: "Стиль - Лофт",
          size: "130 м2",
        },
        {
          id: 2,
          image: "FirstBlock (6).png",
          heading: "Квартира на Рижской",
          style: "Стиль - Скандинавский",
          size: "94 м2",
          link: "/firstproject",
        },
        {
          id: 3,
          image: "FirstBlock (7).png",
          heading: "Квартира на Чистых прудах",
          style: "Стиль  Лофт",
          size: "68 м2",
        },
        {
          id: 4,
          image: "FirstBlock (3).png",
          heading: "Квартира на Рижской",
          style: "Стиль - Скандинавский",
          size: "94 м2",
        },
        {
          id: 5,
          image: "FirstBlock (5).png",
          heading: "Квартира на Чистых прудах",
          style: "Стиль - Лофт",
          size: "85 м2",
        },
        {
          id: 6,
          image: "FirstBlock (2).png",
          heading: "Квартира на Академической",
          style: "В стиле Лофт",
          size: "108 м2",
        },
        {
          id: 7,
          image: "FirstBlock (4).png",
          heading: "Квартира на Академической",
          style: "Стиль - Лофт",
          size: "130 м2",
        },
        {
          id: 8,
          image: "FirstBlock (6).png",
          heading: "Квартира на Рижской",
          style: "Стиль - Скандинавский",
          size: "94 м2",
        },
        {
          id: 9,
          image: "FirstBlock (7).png",
          heading: "Квартира на Чистых прудах",
          style: "Стиль  Лофт",
          size: "68 м2",
        },
        {
          id: 10,
          image: "FirstBlock (5).png",
          heading: "Квартира на Рижской",
          style: "Стиль - Скандинавский",
          size: "94 м2",
        },
        {
          id: 11,
          image: "FirstBlock (3).png",
          heading: "Квартира на Чистых прудах",
          style: "Стиль - Лофт",
          size: "85 м2",
        },
        {
          id: 12,
          image: "FirstBlock (2).png",
          heading: "Квартира на Академической",
          style: "Стиль - Лофт",
          size: "108 м2",
        },
        {
          id: 13,
          image: "FirstBlock (7).png",
          heading: "Квартира на Академической",
          style: "Стиль - Лофт",
          size: "130 м2",
        },
        {
          id: 14,
          image: "FirstBlock (4).png",
          heading: "Квартира на Рижской",
          style: "Стиль - Скандинавский",
          size: "94 м2",
        },
        {
          id: 15,
          image: "FirstBlock (6).png",
          heading: "Квартира на Чистых прудах",
          style: "Стиль  Лофт",
          size: "68 м2",
        },
      ],
    };
  }

  handleClick() {
    this.setState((state) => ({}));
  }
  render() {
    return (
      <div className={styles.repair}>
        <Projects />

        <div className={styles.item_block}>
          <Items item={this.state.item} />
        </div>

        <button className={styles.button}>
          <img className={styles.reload} src={reload} alt="" />

          <h1 className={styles.button_heading}>Еще проекты</h1>
        </button>

        <div className={styles.get_service}>
          <GetService />
        </div>

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}
