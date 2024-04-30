import React from "react";

import styles from "../../../styles/DesignService/Request.module.css"

const Request = () => {
  return (
    <div>
      <div className={styles.request}>
        <div className={styles.block}>
          <h1 className={styles.heading}>
            Оставьте заявку и мы поможем вам с проектом
          </h1>
          <button className={styles.button}>Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Request;
