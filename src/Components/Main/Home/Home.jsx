import React from "react";
import Header from "../../Header/HeaderMain";

import styles from "../../../styles/MainStyles/HomeStyles/Home.module.css";
import HeaderMain from "../../Header/HeaderMain";
import Neck from "../Neck/Neck";
import Collarbones from "../Collarbones/Collarbones";
import Ribs from "../Ribs/Ribs";
import Hips from "../Hips/Hips";
import Belly from "../Belly/Belly";
import Knees from "../Knees/Knees";
import Legs from "../Legs/Legs";
import Instagram from "../Instagram/Instagram";
import Catalog from "../Catalog/Catalog";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className={styles.home}>
      <HeaderMain />
      <Neck />
      <Collarbones />
      <Ribs />
      <Belly />
      <Hips />
      <Knees />
      <Legs />
      <Instagram />
      <Catalog />
      <Footer />
    </div>
  );
};

export default Home;
