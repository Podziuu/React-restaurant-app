import React from "react";

import PopularDish from "./PopularDish";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

import spaghetti from '../../assets/spaghetti.png'

SwiperCore.use([Navigation]);

const PopularDishes = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Popular Dishes</h1>

      <Swiper
        spaceBetween={200}
        slidesPerView={1}
        navigation={true}
        centeredSlides={true}
      >
        <SwiperSlide>
          <PopularDish photo={spaghetti} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDish photo={spaghetti} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDish photo={spaghetti} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDish photo={spaghetti} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDish photo={spaghetti} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDish photo={spaghetti} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularDishes;
