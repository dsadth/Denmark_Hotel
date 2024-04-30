import React, { Component } from "react";
import Item from "./Item";

export default class Items extends Component {
  render() {
    return (
      <div>
        {this.props.item.map((el) => (
          <Item key={el.id} item={el} />
        ))}
      </div>
    );
  }
}
