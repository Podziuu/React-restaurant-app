import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import PopularDish from "./PopularDish";
import spaghetti from '../../assets/spaghetti.png'

const Menu = () => {
  return (
    <section>
      <div className="flex justify-between w-full">
        <h2 className="font-bold text-3xl">
          Our Regular <br /> Menu Pack
        </h2>
        <select
          name="menu"
          className="font-bold text-lg border-amber-400 border-2 rounded-full px-6 py-2"
        >
          <option>Italian</option>
          <option>Mexican</option>
          <option>Spanish</option>
          <option>Japanese</option>
          <option>Greece</option>
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
