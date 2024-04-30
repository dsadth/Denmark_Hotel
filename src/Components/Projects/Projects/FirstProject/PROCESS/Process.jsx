import React from "react";
import Header from "../../../../Header/Header";
import FirstProject from "../FirstProject";

import styles from "../../../../../styles/ProjectsStyles/Projects/TwoProject/ProcessTwoProject/ProcessTwoProject.module.css";
import { Link } from "react-router-dom";
import Neck from "./Neck/Neck";
import Collarbones from "./Collarbones/Collarbones";
import Belly from "./Belly/Belly";
import Hips from "./Hips/Hips";
import Knees from "./Knees/Knees";
import Legs from "./Legs/Legs";
import Footer from "../../../../Main/Footer/Footer";

const Process = () => {
  return (
    <div>
      <Header />

      <div className={styles.border}></div>

      <h1 className={styles.heading}>
        <Link to="/" className={styles.main}>
          Главная
        </Link>{" "}
        /{" "}
        <Link to="/projects" className={styles.main}>
          Проекты
        </Link>{" "}
        / <span>Проект</span>
      </h1>

      <div className={styles.block_buttons}>
        <buttton className={styles.button}>
          <span className={styles.span_buttons}>Описание</span>
        </buttton>
        <Link to="/firstproject/process">
          <buttton className={styles.button}>
            <span className={styles.span_buttons}>Процесс</span>
          </buttton>
        </Link>
      </div>

      <Neck />
      <Collarbones />
      <Belly />
      <Hips />
      <Knees />
      <Legs />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Process;
