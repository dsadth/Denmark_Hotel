import React from "react";

import styles from "../../styles/HeaderStyles/Header.module.css";

import Home from "../Main/Home/Home";
import { Link } from "react-router-dom";

import menulogo from "./images/menu.logo.png";
import background from "./images/background.png";
import logo from "./images/Logo.png";
import phone from "../Header/images/phone.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={background} className={styles.background} alt="" />
      <img src={logo} className={styles.logo} alt="" />
      <div className={styles.menu_main}>
        <Link to="/menu">
          <img src={menulogo} alt="" />
        </Link>

        <img src={phone} className={styles.phone} alt="" />
      </div>
    </div>
  );
};

export default Header;
