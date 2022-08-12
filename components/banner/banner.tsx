import React from 'react';
import swiperStyle from '../../styles/Swiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import banner from '../../public/assets/banner.png';

const Banner = () => {
  const moveToBuckitHomePage = () => {
    window.location.href = 'https://buckit.oopy.io/';
  };
  return (
    <Swiper
      className={swiperStyle.container}
      spaceBetween={10}
      slidesPerView={1}
    >
      <SwiperSlide onClick={moveToBuckitHomePage}>
        <Image src={banner} layout={'fill'} />
      </SwiperSlide>
      <SwiperSlide onClick={moveToBuckitHomePage}>
        <Image src={banner} layout={'fill'} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
