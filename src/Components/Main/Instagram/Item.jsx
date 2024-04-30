import React, { Component } from "react";

import styles from "../../../styles/MainStyles/InstagramStyles/Instagram.module.css"

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <img src={"./img/Main/InstagramMain/" + this.props.item.image} alt="" />
      </div>
    );
  }
}
