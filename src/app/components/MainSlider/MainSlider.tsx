import { FC } from 'react';
import Slider from 'react-slick';

import { SliderContainer } from './MainSlider.styles';
import { MainSliderProps } from './MainSlider.types';

const MainSlider: FC<MainSliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>{slides}</Slider>
    </SliderContainer>
  );
};

export default MainSlider;
