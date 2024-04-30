import React from "react";
import Repair from "./Repair/Repair";
import Header from "../../Header/Header";

import styles from "../../../styles/ProjectsStyles/Project.module.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <Header />

      <h1 className={styles.heading}>
      <Link to="/" className={styles.main}>Главная</Link> / <span> Проекты</span>
      </h1>

      <div className={styles.projects_nav}>
        <button className={styles.button}>Архитектура</button>
        <button className={styles.button}>3D-дизайн</button>

        <Link to="/repair">
          <button className={styles.button}>Ремонт</button>
        </Link>
        <button className={styles.button}>Строительство</button>
      </div>
    </div>
  );
};

export default Projects;
