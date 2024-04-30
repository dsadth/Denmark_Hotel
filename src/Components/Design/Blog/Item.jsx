import React, { Component } from "react";

import styles from "../../../styles/Design/Blog.module.css";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.item_block}>
          <h1 className={styles.date}> {this.props.item.date}</h1>
          <h1 className={styles.heading}> {this.props.item.heading}</h1>
          <h1 className={styles.paragraph}> {this.props.item.paragraph}</h1>

          <button className={styles.button}>Читать полностью</button>
        </div>
      </div>
    );
  }
}
