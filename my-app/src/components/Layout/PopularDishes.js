import React, { useEffect, useState } from "react";

import PopularDish from "./PopularDish";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

import spaghetti from "../../assets/spaghetti.png";

SwiperCore.use([Navigation]);

const PopularDishes = () => {
  const [popularMenu, setPopularMenu] = useState([]);

  useEffect(() => {
    const getPopularMenu = async () => {
      const response = await fetch(
        "https://restaurant-app-ac948-default-rtdb.firebaseio.com/Popular.json"
      );
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setPopularMenu(data);
    };
    getPopularMenu();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl">Popular Dishes</h1>

      <Swiper
        spaceBetween={200}
        slidesPerView={1}
        navigation={true}
        centeredSlides={true}
      >
        {popularMenu.map((meal) => {
          return (
            <SwiperSlide key={meal.id}>
              <PopularDish id={meal.id} photo={meal.photo} text={meal.name} />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default PopularDishes;
