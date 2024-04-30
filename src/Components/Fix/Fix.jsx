import React from "react";
import styles from "../../styles/FixStyles/Fix.module.css";
import Header from "../Header/Header";
import Neck from "./Neck/Neck";
import Collarbones from "./Collarbones/Collarbones";
import Ribs from "./Ribs/Ribs";
import Belly from "./Belly/Belly";
import Footer from "../Main/Footer/Footer";
import Hips from "./Hips/Hips";
import Knees from "./Knees/Knees";
import Legs from "./Legs/Legs";
import Blog from "./Blog/Blog";
import Descriptions from "./Descriptions/Descriptions";
import Reques from "./Request/Request";
import Request from "./Request/Request";

const Fix = () => {
  return (
    <div className={styles.fix}>
      <Header />
      <Neck />
      <Collarbones />
      <Ribs />
      <Belly />
      <Hips />
      <Knees />
      <Legs />
      <Blog />
      <Descriptions />
      <Request />

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Fix;
