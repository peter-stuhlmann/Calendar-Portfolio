'use client';

import Image from 'next/image';
import { FC, useState } from 'react';

import products from '@/app/data/products';
import { GridContainer, GridItem } from './ProductGrid.styles';
import { Product } from '@/app/types';

const ProductGrid: FC = () => {
  const [isAdultContentVisible, setIsAdultContentVisble] =
    useState<boolean>(true);

  const filteredProducts = products.filter((product: Product) => {
    return isAdultContentVisible || !product.adultContent;
  });

  return (
    <GridContainer>
      {filteredProducts.map((product: Product) => (
        <GridItem key={product.slug} href={product.slug}>
          <div>
            <Image
              src={`/img/${product.year}/${product.id}_0.jpg`}
              alt={`Deckblatt des Kalenders "${product.title}"`}
              width={product.orientation === 'landscape' ? 460 : 322}
              height={product.orientation === 'landscape' ? 322 : 460}
              sizes="(min-width: 1080px) 300px, (min-width: 480px) calc(50vw - 60px), calc(50vw - 30px)"
              placeholder="blur"
              blurDataURL={`data:image/jpeg;base64,${product.placeholder}`}
            />
            {product.note && <div>{product.note}</div>}
          </div>
          <div>
            <div>{product.title}</div>
          </div>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default ProductGrid;
