import React, { Component } from "react";

import styles from "../../../styles/FixStyles/Knees.module.css";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.item_block}>
          <img
            className={styles.image}
            src={"./img/Fix/Knees/" + this.props.item.image}
            alt=""
          />
                    <div className={styles.block}>{this.props.item.block}</div>
          <h1 className={styles.number}>{this.props.item.number}</h1>
          <h1 className={styles.heading}>{this.props.item.heading}</h1>
          <p className={styles.paragraph}>{this.props.item.paragraph}</p>
        </div>
      </div>
    );
  }
}
