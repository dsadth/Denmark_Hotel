import React from "react";

import styles from "../../../styles/FixService/Request.module.css";
import { Link } from "react-router-dom";

const Request = () => {
  return (
    <div className={styles.request}>
      <div className={styles.block}>
        <h1 className={styles.heading}>
          Оставьте заявку и мы поможем вам с проектом
        </h1>

        <Link to="/contacts">
          <button className={styles.button}>Оставить заявку</button>
        </Link>
      </div>
    </div>
  );
};

export default Request;
