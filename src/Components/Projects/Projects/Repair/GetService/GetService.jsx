import React from 'react'

import styles from "../../../../../styles/ProjectsStyles/RepairStyles/GetService.module.css"

const GetService = () => {
  return (
    <div className={styles.get_service}>

        <div className={styles.block_get_service}>

            <h1 className={styles.heading}>Оставьте заявку и мы поможем вам с проектом</h1>


            <button className={styles.button}>Оставить заявку</button>

        </div>

    </div>
  )
}

export default GetService