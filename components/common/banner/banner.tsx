import React, { MouseEventHandler } from 'react';
import swiperStyle from '../../../styles/Swiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import guide from '../../../public/assets/banner_guide.jpeg';
import event_banner from '../../../public/assets/event_banner.png';
import event_banner2 from '../../../public/assets/event_banner2.jpeg';

import { Autoplay } from 'swiper';

interface BannerProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  onClickEventBanner2: any;
}

const Banner = ({ onClick, onClickEventBanner2 }: BannerProps) => {
  const openBuckitHomePage = () => {
    window.location.href = 'https://blog.naver.com/buckit/222889278710';
  };

  const openBuckitGuide = () => {
    window.location.href = 'https://blog.naver.com/buckit/222897245448';
  };
  return (
    <Swiper
      className={swiperStyle.container}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]}
    >
      <SwiperSlide onClick={onClickEventBanner2}>
        <Image
          src={event_banner2}
          layout={'fill'}
          alt={'이벤트 배너'}
          unoptimized={true}
        />
      </SwiperSlide>
      <SwiperSlide onClick={onClick ?? openBuckitHomePage}>
        <Image
          src={event_banner}
          layout={'fill'}
          alt={'이벤트 배너'}
          unoptimized={true}
        />
      </SwiperSlide>
      <SwiperSlide onClick={onClick ?? openBuckitGuide}>
        <Image
          src={guide}
          layout={'fill'}
          alt={'이벤트 베너'}
          unoptimized={true}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
