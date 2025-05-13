import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
            className="max-w-2xl"
        >
            <SwiperSlide>
                <img src="/images/slider_img_1.jpg" alt="Image 1" className='w-full h-full object-cover rounded-2xl overflow-hidden'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/slider_img_2.jpg" alt="Image 2" className='w-full h-full object-cover rounded-2xl overflow-hidden'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/slider_img_3.jpg" alt="Image 3" className='w-full h-full object-cover rounded-2xl overflow-hidden'/>
            </SwiperSlide>
        </Swiper>
    )
}