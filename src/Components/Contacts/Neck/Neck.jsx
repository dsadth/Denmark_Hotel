import React from "react";

import styles from "../../../styles/Contacts/Neck.module.css";

import telegram from "./image/image (2).png";
import instagram from "./image/image (3).png";
import facebook from "./image/image (4).png";
import youtube from "./image/image (5).png";
import tiktok from "./image/image (1).png";
import whatsup from "./image/image (6).png";

const Neck = () => {
  return (
    <div className={styles.neck}>
      <div className={styles.heading_link_block}>
        <h1 className={styles.heading_link}>
          Главная / <span>Контакты</span>
        </h1>
      </div>

      <div className={styles.neck_block_contact}>
        <div className={styles.left_block}>
          <h1 className={styles.heading}>Контакты</h1>

          <div className={styles.block_email}>
            <p className={styles.paragraph_email}>Email:</p>
            <p className={styles.paragraph_email_gid}>Hello@gid.group</p>
          </div>

          <div className={styles.phone_block}>
            <h1 className={styles.heading_phone}>Телефон:</h1>

            <h1 className={styles.phone_heading_number}>+7 (929) 759 64 55</h1>
            <h1 className={styles.phone_heading_number}>+7 (928) 559 64 26</h1>
            <h1 className={styles.phone_heading_number}>+7 (929) 329 37 25</h1>
          </div>
        </div>

        <div className={styles.middle_block}>
          <h1 className={styles.office}>Офис:</h1>

          <p className={styles.street}>
            ул. Электрозаводская 21, к. 41, 107023, Москва, Россия
          </p>
        </div>

        <div className={styles.right_block}>
          <h1 className={styles.social_media}>Мы в социальных сетях</h1>

          <div className={styles.social_image_block}>
            <img className={styles.social_image} src={telegram} alt="" />
            <img className={styles.social_image} src={instagram} alt="" />
            <img className={styles.social_image} src={facebook} alt="" />
            <img className={styles.social_image} src={youtube} alt="" />
            <img className={styles.social_image} src={tiktok} alt="" />
            <img className={styles.social_image} src={whatsup} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neck;
