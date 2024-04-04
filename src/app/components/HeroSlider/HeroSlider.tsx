'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';

import { HeroSliderContainer } from './HeroSlider.styles';
import products from '@/app/data/products';
import { Product } from '@/app/types';
import heroSlider from '@/app/data/heroSlider';

export default function HeroSlider(): React.JSX.Element {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  const filteredProducts = products.filter((product: Product) =>
    heroSlider.includes(product.id)
  );

  const sortedFilteredProducts = filteredProducts.sort(
    (a, b) => heroSlider.indexOf(a.id) - heroSlider.indexOf(b.id)
  );

  return (
    <HeroSliderContainer>
      <Slider {...settings}>
        {sortedFilteredProducts.map((product: Product) => (
          <div key={product.id}>
            <Image
              src={`/img/hero/${product.id}-desktop.jpg`}
              alt={product.title}
              fill
              placeholder="blur"
              blurDataURL={`data:image/jpeg;base64,${product.placeholder}`}
            />
            <Image
              src={`/img/hero/${product.id}-mobile.jpg`}
              alt={product.title}
              fill
              placeholder="blur"
              blurDataURL={`data:image/jpeg;base64,${product.placeholder}`}
            />
            <div>
              <div>
                <div>{product.title}</div>
                <Link href={`/${product.slug}`}>Zum Kalender</Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </HeroSliderContainer>
  );
}
