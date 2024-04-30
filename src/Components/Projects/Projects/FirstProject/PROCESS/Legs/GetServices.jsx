import React from "react";

import styles from "../../../../../../styles/ProjectsStyles/Projects/TwoProject/ProcessTwoProject/GetServices.module.css"

const GetServices = () => {
  return (

      <div className={styles.block_get_service}>
        <h1 className={styles.heading}>
          Оставьте заявку и мы поможем вам с проектом
        </h1>

        <button className={styles.button}>Оставить заявку</button>
      </div>

  );
};

export default GetServices;
