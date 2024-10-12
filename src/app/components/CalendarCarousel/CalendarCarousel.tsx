'use client';

import { FC } from 'react';

import Image from 'next/image';
import Slider from 'react-slick';
import Link from 'next/link';

import products from '@/app/data/products';
import { Product } from '@/app/types';
import { Carousel } from './CalendarCarousel.styles';
import { CalendarCarouselProps } from './CalendarCarousel.types';

const CalendarCarousel: FC<CalendarCarouselProps> = ({ excludeProductId }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const filteredProducts = products.filter(
    (product: Product) => product.id !== excludeProductId
  );

  return (
    <Carousel>
      <h3>Weitere Kalender</h3>
      <Slider {...settings}>
        {filteredProducts.map((product: Product) => (
          <div key={product.id}>
            <Link href={`/${product.slug}`}>
              <Image
                src={`/img/${product.year}/${product.id}_0.jpg`}
                alt={product.title}
                width={300}
                height={212}
                sizes="(min-width: 680px) 300px, (min-width: 500px) 210px, (min-width: 400px) 180px, 130px"
                placeholder="blur"
                blurDataURL={`data:image/jpeg;base64,${product.placeholder}`}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </Carousel>
  );
};

export default CalendarCarousel;
