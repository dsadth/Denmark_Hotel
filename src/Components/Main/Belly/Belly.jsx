import React, { Component } from "react";

import styles from "../../../styles/MainStyles/BellyStyles/Belly.module.css";
import Items from "./Items";

export default class Belly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          image: "firstserviceimage.png",
          heading: "3D-дизайн",
          paragraph:
            "Идейные соображения высшего порядка, а также внедрение современных методик обеспечивает актуальность глубокомысленных рассуждений.",
          square: "square.png",
        },
        {
          id: 2,
          image: "twoserviceimage.png",
          heading: "Ремонт",
          paragraph:
            "Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.",
          square: "square.png",
        },
        {
          id: 3,
          image: "threeserviceimage.png",
          heading: "Строительство",
          paragraph:
            "Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.",
          square: "square.png",
        },
        {
          id: 4,
          image: "fourserviceimage.png",
          heading: "Ландшафтный дизайн",
          paragraph:
            "Идейные соображения высшего порядка обеспечивает актуальность глубокомысленных рассуждений.",
          square: "square.png",
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.belly}>
        <div>
          <Items item={this.state.item} />
        </div>

      </div>
    );
  }
}
