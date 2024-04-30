import React from 'react'

import styles from "../../../styles/Design/Request.module.css"

const Request = () => {
  return (
    <div className={styles.request}>

      <div className={styles.block}>
        <h1 className={styles.heading}>Оставьте заявку и мы поможем вам с проектом</h1>
        <button className={styles.button}>Оставить заявку</button>
      </div>
      
    </div>
  )
}

export default Request