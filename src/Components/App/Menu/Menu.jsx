import React from "react";

import styles from "../../../styles/HeaderStyles/Menu.module.css";

import phone from "./images/phone.png";
import gid from "./images/gid.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import wk from "./images/wk.png";
import background from "./images/background.png";
import close from "./images/close.png";

import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.menu}>
      <img className={styles.background} src={background} alt="" />
      <div className={styles.gradient_background}></div>

      <img
        className={styles.close_menu}
        src={close}
        alt=""
        onClick={() => navigate(-1)}
      />

      <img className={styles.phone_logo} src={phone} alt="" />

      <img className={styles.gid_logo} src={gid} alt="" />

      <div className={styles.menu_block}>
        <Link to="/">
          <h1 className={styles.menu_list}>
            <span>Главная</span>
          </h1>
        </Link>

        <Link to="/projects/design">
          <h1 className={styles.menu_list}>
            <span>3D-Дизайн</span>
          </h1>
        </Link>

        <Link to="/projects/fix">
          <h1 className={styles.menu_list}>
            <span>Ремонт</span>
          </h1>
        </Link>

        <h1 className={styles.menu_list}>
          <span>Строительство</span>
        </h1>

        <Link to="/repair">
          <h1 className={styles.menu_list}>
            <span>Проекты</span>
          </h1>
        </Link>

        <h1 className={styles.menu_list}>
          <span>Ландшафтный дизайн</span>
        </h1>
      </div>

      <div className={styles.block_logos}>
        <img className={styles.logos} src={instagram} alt="" />
        <img className={styles.logos} src={wk} alt="" />
        <img className={styles.logos} src={facebook} alt="" />
      </div>
    </div>
  );
};

export default Menu;
