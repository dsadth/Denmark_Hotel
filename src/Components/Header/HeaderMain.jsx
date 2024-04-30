import React from "react";

import styles from "../../styles/HeaderStyles/HeaderMain.module.css";
import Home from "../Main/Home/Home";
import { Link } from "react-router-dom";

import menulogo from "./images/menu.logo.png";
import background from "./images/background.png";
import logo from "./images/Logo.png";
import phone from "../Header/images/phone.png";

const HeaderMain = () => {
  return (
    <div className={styles.header_main}>
      <img src={background} className={styles.background} alt="" />

      <div className={styles.menu_main}>
        
        <Link to="/menu">
          <img src={menulogo} alt="" />
        </Link>

        <img src={logo} className={styles.logo} alt="" />

        <img src={phone} className={styles.phone} alt="" />
      </div>
    </div>
  );
};

export default HeaderMain;
