import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import PopularDish from "./PopularDish";
import spaghetti from "../../assets/spaghetti.png";

const Menu = () => {
  const clickHandler = (e) => {
    console.log(e);
  };

  return (
    <section>
      <div className="flex justify-between w-full">
        <h2 className="font-bold text-3xl">
          Our Regular <br /> Menu Pack
        </h2>
        <select
          name="menu"
          className="font-bold text-lg border-amber-400 border-2 rounded-full px-6 py-2"
          defaultValue='Italian'
          onChange={clickHandler}
        >
          <option value="Italian" onClick={clickHandler}>Italian</option>
          <option value="Mexican" onClick={clickHandler}>Mexican</option>
          <option value="Spanish">Spanish</option>
          <option value="Japanese">Japanese</option>
          <option value="Greece">Greece</option>
        </select>
      </div>
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
    </section>
  );
};

export default Menu;
