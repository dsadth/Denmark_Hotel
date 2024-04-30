import React from "react";
import Header from "../Header/Header";
import Neck from "./Neck/Neck";

import styles from "../../styles/Design/Design.module.css";
import Collarbones from "./Collarbones/Collarbones";
import Ribs from "./Ribs/Ribs";
import Belly from "./Belly/Belly";
import Hips from "./Hips/Hips";
import Knees from "./Knees/Knees";
import Legs from "./Legs/Legs";
import Descriptions from "./Description/Description";
import Command from "./Command/Command";
import Blog from "./Blog/Blog";
import Email from "./EmailForm/Email";
import Request from "./Request/Request";
import Footer from "../Main/Footer/Footer";

const Design = () => {
  return (
    <div className={styles.design}>
      <Header />
      <Neck />
      <Collarbones />
      <Ribs />
      <Belly />
      <Hips />
      <Knees />
      <Legs />
      <Descriptions />
      <Command />
      <Blog />
      <Email />
      <Request />

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Design;
