import React from "react";

import styles from "../../../styles/HeaderStyles/FooterStyles/Footer.module.css";

import background from "./images/background.png";
import slice from "./images/slice.png";
import logo from "./images/logo.png";
import arrow from "./images/arrow.png";

import telegram from "./images/logos/firstlogo.png";
import instagram from "./images/logos/twologo.png";
import facebook from "./images/logos/threelogo.png";
import youtube from "./images/logos/fourlogo.png";
import tiktok from "./images/logos/fivelogo.png";
import whatsapp from "./images/logos/sixlogo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.block_left}>
        <img className={styles.background} src={background} alt="" />

        <img className={styles.slice} src={slice} alt="" />

        <img className={styles.logo} src={logo} alt="" />

        <div className={styles.fours_blocks}>
          <div className={styles.first_block}>
            <h1 className={styles.heading}>Компания gid</h1>

            <p className={styles.paragraph}>О нас</p>
            <p className={styles.paragraph}>Наша команда</p>
            <p className={styles.paragraph}>История</p>
          </div>

          <div className={styles.two_block}>
            <h1 className={styles.heading}>Проекты</h1>

            <p className={styles.paragraph}>Квартиры</p>
            <p className={styles.paragraph}>Коттеджы</p>
            <p className={styles.paragraph}>Офисы</p>
            <p className={styles.paragraph}>Рестораны</p>
          </div>

          <div className={styles.three_block}>
            <h1 className={styles.heading}>Услуги</h1>

            <p className={styles.paragraph}>Квартиры</p>
            <p className={styles.paragraph}>Коттеджы</p>
            <p className={styles.paragraph}>Офисы</p>
            <p className={styles.paragraph}>Рестораны</p>
          </div>

          <div className={styles.four_block}>
            <h1 className={styles.heading}>Контакты</h1>

            <p className={styles.paragraph}>+(7495) 555-15-05</p>
            <p className={styles.paragraph}>info@gid.pro</p>
          </div>
        </div>
      </div>

      <div className={styles.block_right}>
        <img className={styles.logos} src={telegram} alt="" />
        <img className={styles.logos} src={instagram} alt="" />
        <img className={styles.logos} src={facebook} alt="" />
        <img className={styles.logos} src={youtube} alt="" />
        <img className={styles.logos} src={tiktok} alt="" />
        <img className={styles.logos} src={whatsapp} alt="" />
      </div>

      <button className={styles.button}></button>

      <h1 className={styles.span_button}>Наверх</h1>
      <img className={styles.arrow} src={arrow} alt="" />
    </div>
  );
};

export default Footer;
