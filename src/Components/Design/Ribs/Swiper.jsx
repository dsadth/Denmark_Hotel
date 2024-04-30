import React, { Component, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "../../../styles/Design/Ribs.module.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import image_one from "./images/image (1).png";
import image_two from "./images/image (2).png";
import image_three from "./images/image (3).png";
import image_four from "./images/image (4).png";

import { Swiper, SwiperSlide } from "swiper/react";

const SwiperS = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        navigation
        className={styles.swiper}
      >
        <SwiperSlide>
          <div>
            <img className={styles.image} src={image_one} alt="" />
            <h1 className={styles.heading}>Квартира на Академической</h1>
            <p className={styles.style}>Стиль - Лофт</p>
            <p className={styles.size}>130 м2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className={styles.image} src={image_two} alt="" />
            <h1 className={styles.heading}>Квартира на Рижской</h1>
            <p className={styles.style}>Стиль - Скандинавский</p>
            <p className={styles.size}>94 м2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className={styles.image} src={image_three} alt="" />
            <h1 className={styles.heading}>Квартира на Чистых прудах</h1>
            <p className={styles.style}>Стиль - Лофт</p>
            <p className={styles.size}>68 м2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className={styles.image} src={image_four} alt="" />
            <h1 className={styles.heading}>Квартира на Академической</h1>
            <p className={styles.style}>Стиль - Лофт</p>
            <p className={styles.size}>130 м2</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperS;
