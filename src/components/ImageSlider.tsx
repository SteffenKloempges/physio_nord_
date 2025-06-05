import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const ImageSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="max-w-xl"
    >
      <SwiperSlide>
        <img
          src="/images/praxis/DSA02377.jpg"
          alt="Image 1"
          className="w-full h-full object-cover rounded-2xl overflow-hidden"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/praxis/DSA02836.jpg"
          alt="Image 2"
          className="w-full h-full object-cover rounded-2xl overflow-hidden"
        />
      </SwiperSlide>
    </Swiper>
  );
};
