import React, { Component } from "react";

import styles from "../../styles/DesignService/DesignService.module.css";
import Header from "../Header/Header";
import Neck from "./Neck/Neck";
import Request from "./Request/Request";
import Footer from "../Main/Footer/Footer";

export default class DesignService extends Component {
  render() {
    return (
      <div className={styles.designservice}>
        <Header />
        <div className={styles.block_heading_link}>
          <h1 className={styles.heading}>
            Главная / <span>Услуги</span>
          </h1>
        </div>

        <div className={styles.block_buttons}>
          <button className={styles.button}>3D-дизайн</button>
          <button className={styles.button}>Ремонт</button>
        </div>

        <Neck />
        <Request />

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}
