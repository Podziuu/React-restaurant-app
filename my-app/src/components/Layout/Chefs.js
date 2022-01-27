import Chef from './Chef'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const Chefs = (props) => {
  return (
    <section>
      <h2 className="font-bold text-3xl">Meet Our Chefs</h2>
      <Swiper
        spaceBetween={200}
        slidesPerView={1}
        navigation={true}
        centeredSlides={true}
      >
        <SwiperSlide>
          <Chef />
        </SwiperSlide>
        <SwiperSlide>
          <Chef />
        </SwiperSlide>
        <SwiperSlide>
          <Chef />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Chefs;
