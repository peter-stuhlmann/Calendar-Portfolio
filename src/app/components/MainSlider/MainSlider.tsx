'use client';

import Slider from 'react-slick';

import { SliderContainer } from './MainSlider.styles';

export default function MainSlider({
  slides,
}: {
  slides: any[];
}): React.JSX.Element {
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
}
