import React, { Component } from "react";

import styles from "../../../styles/FixStyles/Collarbones.module.css";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.item_block}>
          <div className={styles.item_blocks}>
            <img
              src={"./img/" + this.props.item.image}
              alt=""
              className={styles.first_image}
            />
            <img src={"./img/Fix/qqq/" + this.props.item.cube} alt="" />
            <h1 className={styles.heading}>{this.props.item.heading}</h1>

            <div className={styles.paragraph_block}>
              <div className={styles.block_background}></div>
              <p className={styles.paragraph_first}>
                {this.props.item.paragraph}
              </p>
              <p className={styles.paragraph_first_two}>
                {this.props.item.paragraph_first_two}
              </p>
              <p className={styles.paragraph_first_three}>
                {this.props.item.paragraph_first_three}
              </p>
              <p className={styles.paragraph}>
                {" "}
                {this.props.item.paragraph_two}
              </p>
              <p className={styles.paragraph}>
                {" "}
                {this.props.item.paragraph_three}
              </p>
              <p className={styles.paragraph}>
                {" "}
                {this.props.item.paragraph_three}
              </p>
              <p className={styles.paragraph}>
                {" "}
                {this.props.item.paragraph_four}
              </p>
              <p className={styles.paragraph}>
                {" "}
                {this.props.item.paragraph_five}
              </p>
              <p className={styles.paragraph}>
                {" "}
                {this.props.item.paragraph_six}
              </p>
              <p className={styles.paragraph}>
                {" "}
                {this.props.item.paragraph_seven}
              </p>
              <p className={styles.paragraph}>
                {" "}
                {this.props.item.paragraph_eight}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
