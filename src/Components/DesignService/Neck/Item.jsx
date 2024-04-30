import React, { Component } from "react";

import styles from "../../../styles/DesignService/Neck.module.css";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.neck_block_item}>
        <div className={styles.border}></div>
        <div className={styles.item}>
          <div className={styles.item_block}>
            <div className={styles.block_heading}>
              {this.props.item.block_heading}
            </div>
            <h1 className={styles.heading}>{this.props.item.heading}</h1>
            <p className={styles.paragraph}>{this.props.item.paragraph}</p>
            <img src="" className={styles.image} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
