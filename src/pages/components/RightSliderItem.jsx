import { Swiper, SwiperSlide } from 'swiper/react';
import Freeio from '@src/assets/images/portfolio/freeio.png';
import BeLeasing from '@src/assets/images/portfolio/BeLeasing.png';
import BethemeStore from '@src/assets/images/portfolio/BethemeStore.png';
import DavidJones from '@src/assets/images/portfolio/DavidJones.png';
import SalientArchi from '@src/assets/images/portfolio/Salient-Architect.png';
import Salient from '@src/assets/images/portfolio/Salient.png';
import Uncode from '@src/assets/images/portfolio/Uncode.png';
import WoodMart from '@src/assets/images/portfolio/WoodMart.png';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
export const RightSliderItem = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      slidesPerGroup={1}
      centeredSlides={true}
      initialSlide={2}
      loop={true}
      effect={'slide'}
      speed={1200}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
      }}
      accessibility={true}
      modules={[Autoplay]}
      className='mySwiper'
    >
      <SwiperSlide>
        <img src={Freeio} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={BeLeasing} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={BethemeStore} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={DavidJones} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={SalientArchi} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Salient} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Uncode} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={WoodMart} alt='' />
      </SwiperSlide>
    </Swiper>
  );
};
