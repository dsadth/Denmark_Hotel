import React, { Component } from "react";

import styles from "../../../styles/Design/Knees.module.css";
export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.item_block}>
          <img className={styles.block_heading} src="" alt="" />
          <h1 className={styles.heading}>{this.props.item.heading}</h1>
          <div className={styles.image}>{this.props.item.block_heading}</div>
          <p className={styles.paragraph}>{this.props.item.paragraph}</p>
        </div>
      </div>
    );
  }
}
