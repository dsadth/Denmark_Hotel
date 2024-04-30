import React from "react";

import styles from "../../../styles/Design/Description.module.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FirstSlide from "./FirstSlide";

const Descriptions = () => {
  return (
    <div className={styles.descriptions}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className={styles.swiper}
      >
        <SwiperSlide>
          <FirstSlide />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        ...
      </Swiper>

      <div className={styles.heading_block}>
        <div className={styles.heading_heading}>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</div>
        <div className={styles.border}></div>
      </div>
    </div>
  );
};

export default Descriptions;
