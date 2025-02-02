// components/Carousel.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="h-64 bg-blue-500 flex items-center justify-center">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-64 bg-red-500 flex items-center justify-center">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-64 bg-green-500 flex items-center justify-center">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-64 bg-purple-500 flex items-center justify-center">Slide 4</div>
      </SwiperSlide>
    </Swiper>
  );
}
