import React, { Component } from "react";

import styles from "../../../styles/MainStyles/BellyStyles/Belly.module.css";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.table_items}>


          <div className={styles.images}>
          <div className={styles.block_background}></div>
            <img className={styles.image} src={"./img/" + this.props.item.image} />

          </div>
          
          <img className={styles.square} src={"./img/" + this.props.item.square} alt="" />

          <h1 className={styles.heading}>{this.props.item.heading}</h1>
          <p className={styles.paragraph}>{this.props.item.paragraph}</p>
        </div>
      </div>
    );
  }
}
