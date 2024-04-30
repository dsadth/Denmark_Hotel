import React, { Component } from "react";

import styles from "./../../../../styles/ProjectsStyles/RepairStyles/Repair.module.css";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prev: false,
    };

    this.handleClick = this.handleClick.bind(this);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);

    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      prev: !state.prev,
    }));
  }

  handleMouseEnter() {
    this.setState({ prev: true });
  }

  handleMouseLeave() {
    this.setState({ prev: false });
  }

  render() {
    const { prev } = this.state;

    return (
      <div className={styles.item}>
        <div className={styles.item_list}>
          <div className={styles.item_block_list}>
            <div>
              {prev ? (
                <a href={this.props.item.link}>
                  <div className={styles.prev_block}>
                    <div
                      className={styles.background}
                      onClick={this.handleClick}
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      style={{ display: prev ? "block" : "none" }}
                    >
                      <button className={styles.button_prev}>
                        <a href={this.props.item.link}>Смотреть проекты</a>
                      </button>
                    </div>
                  </div>
                </a>
              ) : (
                false
              )}
            </div>

            <img
              className={styles.img}
              onMouseEnter={() => this.handleClick(prev)}
              src={"./img/Projects/Repair/" + this.props.item.image}
              
              alt=""
            />

            <h1>{this.props.item.heading}</h1>
            <h2>{this.props.item.style}</h2>
            <p>{this.props.item.size}</p>
          </div>
        </div>
      </div>
    );
  }
}
