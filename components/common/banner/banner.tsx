import React, { MouseEventHandler } from 'react';
import swiperStyle from '../../../styles/Swiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import guide from '../../../public/assets/banner_guide.jpeg';
import event_banner from '../../../public/assets/event_banner.png';
import { Autoplay } from 'swiper';

interface BannerProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Banner = ({ onClick }: BannerProps) => {
  const moveToBuckitHomePage = () => {
    window.location.href = 'https://blog.naver.com/buckit/222889278710';
  };
  return (
    <Swiper
      className={swiperStyle.container}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      modules={[Autoplay]}
    >
      <SwiperSlide onClick={onClick ?? moveToBuckitHomePage}>
        <Image src={event_banner} layout={'fill'} alt={'이벤트 배너'} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={guide} layout={'fill'} alt={'이벤트 베너'} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
