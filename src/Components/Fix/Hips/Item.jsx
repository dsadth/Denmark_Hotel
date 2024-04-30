import React, { Component } from "react";

import styles from "../../../styles/FixStyles/Hips.module.css";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.item_block}>
          <div className={styles.image}>{this.props.item.image}</div>
          <h1 className={styles.heading}>{this.props.item.heading}</h1>
          <p className={styles.paragraph}>{this.props.item.paragraph}</p>
          <p className={styles.description}>{this.props.item.description}</p>
        </div>
      </div>
    );
  }
}
