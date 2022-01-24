import Opinion from "./Opinion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const Opinions = () => {
  return (
    <section>
      <h2 className="font-bold text-3xl mb-6">What Our Customer Says?</h2>
      <Swiper
        spaceBetween={200}
        slidesPerView={1}
        navigation={true}
        centeredSlides={true}
      >
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Opinions;
