'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';

import { HeroSliderContainer } from './HeroSlider.styles';
import products from '@/app/data/products';
import { Archive, Product } from '@/app/types';
import heroSlider from '@/app/data/heroSlider';

const HeroSlider: FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
  };

  const getImageSrcId = (product: Product) => {
    if (heroSlider.includes(product.id)) {
      return product.id;
    }
    const archiveItem = product.archive?.find((item: Archive) =>
      heroSlider.includes(item.id)
    );
    return archiveItem ? archiveItem.id : product.id;
  };

  const filteredProducts = products.filter(
    (product: Product) =>
      heroSlider.includes(product.id) ||
      (product.archive &&
        product.archive.some((archiveItem) =>
          heroSlider.includes(archiveItem.id)
        ))
  );

  const sortedFilteredProducts = filteredProducts.sort((a, b) => {
    const aId = getImageSrcId(a);
    const bId = getImageSrcId(b);
    return heroSlider.indexOf(aId) - heroSlider.indexOf(bId);
  });

  return (
    <HeroSliderContainer>
      <Slider {...settings}>
        {sortedFilteredProducts.map((product: Product, idx: number) => {
          const imageId = getImageSrcId(product);
          return (
            <div key={product.id}>
              <Image
                src={`/img/hero/${imageId}-desktop.jpg`}
                alt={product.title}
                fill
                priority={idx === 0}
                placeholder="blur"
                blurDataURL={`data:image/jpeg;base64,${product.placeholder}`}
              />
              <Image
                src={`/img/hero/${imageId}-mobile.jpg`}
                alt={product.title}
                fill
                priority={idx === 0}
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
          );
        })}
      </Slider>
    </HeroSliderContainer>
  );
};

export default HeroSlider;
