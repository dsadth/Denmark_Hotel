import React, { Component } from "react";

import styles from "../../../styles/FixStyles/Legs.module.css";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.block_item}>
          <div className={styles.block}>{this.props.item.background_block}</div>
          <div className={styles.background_none_block}>{this.props.item.background_none_block}</div>
          <h1 className={styles.paragraph}>{this.props.item.paragraph}</h1>
        </div>
      </div>
    );
  }
}
