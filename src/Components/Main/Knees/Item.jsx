import React, { Component } from "react";

import styles from "../../../styles/MainStyles/KneesStyles/Knees.module.css";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.items}>
          <h1 className={styles.number}>{this.props.item.number}</h1>
          <img
            src={"./img/Main/KneesMain/" + this.props.item.image}
            className={styles.image}
            alt=""
          />

          <h1 className={styles.heading_six}>{this.props.item.heading_six}</h1>

          <h1 className={styles.heading}>{this.props.item.heading}</h1>
          
          <p className={styles.paragraph}>
            {this.props.item.paragraph}

            <p className={styles.paragraph_two}>
              {this.props.item.paragraph_two}
            </p>
          </p>

          <img
            src={"./img/Main/KneesMain/" + this.props.item.point_background}
            className={styles.point_background}
            alt=""
          />
          <img
            src={"./img/Main/KneesMain/" + this.props.item.point_image}
            className={styles.point_image}
            alt=""
          />

          <p className={styles.paragraph_point}>
            {this.props.item.paragraph_point}
          </p>
        </div>
      </div>
    );
  }
}
