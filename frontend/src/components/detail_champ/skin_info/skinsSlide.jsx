import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SkinImg from './skinImg';
import * as config from '../../../config';
// Import Swiper styles
import 'swiper/swiper.min.css';
// import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import styled from 'styled-components';
import './slide.css';

const SliderSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 10px;
`;

const MySwiper = styled(Swiper)`
  padding: 80px 0 100px 0;
  width: 1000px;
`;

const SkinName = styled.div`
  display: flex;
  font-weight: 600;
  color: #cecbcb;
  justify-content: center;
`;

SwiperCore.use([EffectCoverflow, Pagination]);

function SkinsSlide(props) {
  return (
    <SliderSection>
      <MySwiper
        centeredSlides={true}
        effect={'coverflow'}
        spaceBetween={20}
        pagination={true}
        slideToClickedSlide={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          slideShadows: false,
          modifier: 1,
          depth: 0,
        }}>
        {props.champSkins.map((champSkin) => {
          return (
            <SwiperSlide key={champSkin.id}>
              <SkinImg
                key={champSkin.id + champSkin.name}
                imagePath={
                  config.CHAMPION_SKIN_LOADING_IMG +
                  props.champId +
                  '_' +
                  champSkin.num +
                  '.jpg'
                }
              />
              <SkinName>{champSkin.name}</SkinName>
            </SwiperSlide>
          );
        })}
      </MySwiper>
    </SliderSection>
  );
}

export default SkinsSlide;
