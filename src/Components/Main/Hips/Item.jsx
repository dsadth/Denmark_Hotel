import React, { Component } from "react";

import styles from "../../../styles/MainStyles/HipsStyles/Hips.module.css";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.block_item}>
          <div className={styles.item_list}>
            <div className={styles.border_image}>
              <img
                className={styles.image}
                src={"./img/Main/HipsMain/" + this.props.item.image}
                alt=""
              />
            </div>
            <h1 className={styles.heading}>{this.props.item.heading}</h1>
            <p className={styles.paragraph}>{this.props.item.paragraph}</p>
            <h2 className={styles.size}>{this.props.item.size}</h2>
          </div>
        </div>
      </div>
    );
  }
}
