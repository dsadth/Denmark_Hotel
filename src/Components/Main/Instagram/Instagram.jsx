import React, { Component } from "react";
import Items from "./Items";

import styles from "../../../styles/MainStyles/InstagramStyles/Instagram.module.css";

import insta from "./image/Instagram.png";

export default class Instagram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          image: "FirstImage.png",
        },
        {
          id: 2,
          image: "TwoImage.png",
        },
        {
          id: 3,
          image: "ThreeImage.png",
        },
        {
          id: 4,
          image: "FourImage.png",
        },
        {
          id: 5,
          image: "FiveImage.png",
        },
        {
          id: 6,
          image: "SixImage.png",
        },
        {
          id: 7,
          image: "SevenImage.png",
        },
        {
          id: 8,
          image: "EachImage.png",
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.instagramm}>
        <img className={styles.insta} src={insta} alt="" />
        <div className={styles.block_item}>
          <Items item={this.state.item} />
        </div>
      </div>
    );
  }
}
