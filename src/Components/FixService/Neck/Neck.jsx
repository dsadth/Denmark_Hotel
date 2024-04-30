import React, { useState } from "react";

import styles from "../../../styles/FixService/Neck.module.css";

import first_image from "./images/image (1).png";
import two_image from "./images/image (4).png";
import three_image from "./images/image (3).png";
import four_image from "./images/image (2).png";

import cube from "./images/cube.png";

const Neck = () => {
  const [firstblock, setFirstBlock] = useState(true);
  const [twoblock, setTwoBlock] = useState(true);
  const [threeblock, setThreeBlock] = useState(true);
  const [fourblock, setFourBlock] = useState(true);
  const [fiveblock, setFiveBlock] = useState(true);

  const handleClick = () => {
    setFirstBlock(!firstblock);
    setTwoBlock(true);
    setThreeBlock(true);
    setFourBlock(true);
    setFiveBlock(true);
  };

  const handleClickTwo = () => {
    setFirstBlock(true);
    setTwoBlock(!twoblock);
    setThreeBlock(true);
    setFourBlock(true);
    setFiveBlock(true);
  };

  const handleClickThree = () => {
    setFirstBlock(true);
    setTwoBlock(true);
    setThreeBlock(!threeblock);
    setFourBlock(true);
    setFiveBlock(true);
  };

  const handleClickFour = () => {
    setFirstBlock(true);
    setTwoBlock(true);
    setThreeBlock(true);
    setFourBlock(!fourblock);
    setFiveBlock(true);
  };

  const handleClickFive = () => {
    setFirstBlock(true);
    setTwoBlock(true);
    setThreeBlock(true);
    setFourBlock(true);
    setFiveBlock(!fiveblock);
  };

  return (
    <div className={styles.neck}>
      <div className={styles.button_block}>
        <h1 className={styles.plus}>+</h1>
        <button onClick={handleClick} className={styles.button}>
          <span>Черновой этап </span>
        </button>

        {!firstblock ? (
          <div className={styles.images_block}>
            <img className={styles.cube_one} src={cube} alt="" />
            <div className={styles.block_open}>
              <img src={first_image} alt="" />
              <h1 className={styles.heading_demontage}>Демонтаж</h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube} src={cube} alt="" />
              <img className={styles.image} src={two_image} alt="" />
              <h1 className={styles.heading_wall}>
                Штукатурка потолка и стен{" "}
              </h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube_two} src={cube} alt="" />
              <img className={styles.image} src={three_image} alt="" />
              <h1 className={styles.heading_sex}> Стяжка полов </h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube_three} src={cube} alt="" />
              <img className={styles.image} src={four_image} alt="" />
              <h1 className={styles.heading_sound_off}> Звукоизоляция </h1>
            </div>
          </div>
        ) : (
          false
        )}

        <h1 className={styles.plus}>+</h1>
        <button onClick={handleClickTwo} className={styles.button}>
          <span>Инженерные работы</span>
        </button>
        {!twoblock ? (
          <div className={styles.images_block}>
            <img className={styles.cube_one} src={cube} alt="" />
            <div className={styles.block_open}>
              <img src={first_image} alt="" />
              <h1 className={styles.heading_demontage}>Демонтаж</h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube} src={cube} alt="" />
              <img className={styles.image} src={two_image} alt="" />
              <h1 className={styles.heading_wall}>
                Штукатурка потолка и стен{" "}
              </h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube_two} src={cube} alt="" />
              <img className={styles.image} src={three_image} alt="" />
              <h1 className={styles.heading_sex}> Стяжка полов </h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube_three} src={cube} alt="" />
              <img className={styles.image} src={four_image} alt="" />
              <h1 className={styles.heading_sound_off}> Звукоизоляция </h1>
            </div>
          </div>
        ) : (
          false
        )}

        <h1 className={styles.plus}>+</h1>
        <button onClick={handleClickThree} className={styles.button}>
          <span>Предчистовая отделка</span>
        </button>
        {!threeblock ? (
          <div className={styles.images_block}>
            <img className={styles.cube_one} src={cube} alt="" />
            <div className={styles.block_open}>
              <img src={first_image} alt="" />
              <h1 className={styles.heading_demontage}>Демонтаж</h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube} src={cube} alt="" />
              <img className={styles.image} src={two_image} alt="" />
              <h1 className={styles.heading_wall}>
                Штукатурка потолка и стен{" "}
              </h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube_two} src={cube} alt="" />
              <img className={styles.image} src={three_image} alt="" />
              <h1 className={styles.heading_sex}> Стяжка полов </h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube_three} src={cube} alt="" />
              <img className={styles.image} src={four_image} alt="" />
              <h1 className={styles.heading_sound_off}> Звукоизоляция </h1>
            </div>
          </div>
        ) : (
          false
        )}

        <h1 className={styles.plus}>+</h1>
        <button onClick={handleClickFour} className={styles.button}>
          <span>Чистовая отделка</span>
        </button>
        {!fourblock ? (
          <div className={styles.images_block}>
            <img className={styles.cube_one} src={cube} alt="" />
            <div className={styles.block_open}>
              <img src={first_image} alt="" />
              <h1 className={styles.heading_demontage}>Демонтаж</h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube} src={cube} alt="" />
              <img className={styles.image} src={two_image} alt="" />
              <h1 className={styles.heading_wall}>
                Штукатурка потолка и стен{" "}
              </h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube_two} src={cube} alt="" />
              <img className={styles.image} src={three_image} alt="" />
              <h1 className={styles.heading_sex}> Стяжка полов </h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube_three} src={cube} alt="" />
              <img className={styles.image} src={four_image} alt="" />
              <h1 className={styles.heading_sound_off}> Звукоизоляция </h1>
            </div>
          </div>
        ) : (
          false
        )}

        <h1 className={styles.plus}>+</h1>
        <button onClick={handleClickFive} className={styles.button}>
          <span>Заключительный этап</span>
        </button>
        {!fiveblock ? (
          <div className={styles.images_block}>
            <img className={styles.cube_one} src={cube} alt="" />
            <div className={styles.block_open}>
              <img src={first_image} alt="" />
              <h1 className={styles.heading_demontage}>Демонтаж</h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube} src={cube} alt="" />
              <img className={styles.image} src={two_image} alt="" />
              <h1 className={styles.heading_wall}>
                Штукатурка потолка и стен{" "}
              </h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube_two} src={cube} alt="" />
              <img className={styles.image} src={three_image} alt="" />
              <h1 className={styles.heading_sex}> Стяжка полов </h1>
            </div>

            <div className={styles.block_open}>
              <img className={styles.cube_three} src={cube} alt="" />
              <img className={styles.image} src={four_image} alt="" />
              <h1 className={styles.heading_sound_off}> Звукоизоляция </h1>
            </div>
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default Neck;
