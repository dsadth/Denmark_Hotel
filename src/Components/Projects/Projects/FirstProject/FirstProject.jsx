import React from "react";
import Header from "../../../Header/Header";

import styles from "../../../../styles/ProjectsStyles/Projects/TwoProject/TwoProject.module.css";

import background from "./image/background.png";
import { Link } from "react-router-dom";
import Neck from "./Neck/Neck";
import Collarbones from "./Collarbones/Collarbones";
import Ribs from "./Ribs/Ribs";
import Belly from "./Belly/Belly";
import Hips from "./Hips/Hips";
import Footer from "../../../Main/Footer/Footer";

const FirstProject = () => {
  return (
    <div className={styles.two_project}>
      <Header />

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
      <Ribs />
      <Belly />
      <Hips />

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default FirstProject;
