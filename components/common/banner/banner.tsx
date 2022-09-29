import React, { MouseEventHandler } from 'react';
import swiperStyle from '../../../styles/Swiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import banner from '../../../public/assets/banner.png';

interface BannerProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Banner = ({ onClick }: BannerProps) => {
  const moveToBuckitHomePage = () => {
    window.location.href = 'https://buckit.oopy.io/';
  };
  return (
    <Swiper
      className={swiperStyle.container}
      spaceBetween={10}
      slidesPerView={1}
    >
      <SwiperSlide onClick={onClick ?? moveToBuckitHomePage}>
        <Image src={banner} layout={'fill'} alt={'이벤트 배너'} />
      </SwiperSlide>
      <SwiperSlide onClick={moveToBuckitHomePage}>
        <Image src={banner} layout={'fill'} alt={'이벤트 베너'} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
