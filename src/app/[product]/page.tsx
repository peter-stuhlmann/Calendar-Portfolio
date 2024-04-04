'use client';

import Image from 'next/image';

import products from '../data/products';
import monthNames from '../data/monthNames';

import { Product } from '../types';
import {
  Container,
  Description,
  Heading,
  ShortDescription,
} from '../page.styles';
import VariantsTable from '../components/VariantsTable';
import SharingButtons from '../components/SharingButtons';
import CalendarCarousel from '../components/CalendarCarousel';
import MainSlider from '../components/MainSlider';
import Note from '../components/Note';
import NotFound from '../components/NotFound';

export default function Detailpage({
  params,
}: {
  params: { product: string };
}): React.JSX.Element {
  const product =
    products.find((product: Product) => product.slug === params.product) ||
    null;

  if (!product) {
    return <NotFound />;
  }

  const images = [];

  if (product) {
    for (let i = 0; i < 14; i++) {
      images.push(
        <div key={product.id + i}>
          <Image
            src={`/img/${product.id}_${i}.jpg`}
            alt={`${product.title} - ${monthNames[i]}`}
            width={product.orientation === 'landscape' ? 640 : 452}
            height={product.orientation === 'landscape' ? 452 : 640}
            sizes="(min-width: 1100px) 640px, (min-width: 680px) 600px, (min-width: 500px) 420px, (min-width: 400px) 380px, 280px"
            priority={i === 0}
            placeholder="blur"
            blurDataURL={`data:image/jpeg;base64,${product.placeholder}`}
          />
          <div className="slide-subtitle">{monthNames[i]}</div>
        </div>
      );
    }
  }

  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <div>
        <Heading>
          Kalender {product && <>&quot;{product.title}&quot;</>}
        </Heading>
        {product && (
          <ShortDescription>{product.shortDescription}</ShortDescription>
        )}
        <MainSlider slides={images} />
        <Description>
          <h3>Produktbeschreibung:</h3> {product?.description}
        </Description>
        {product && product.year <= currentYear && (
          <Note
            content={`Dieser Kalender ist aktuell nur für ${
              product.year
            } verfügbar. Die ${
              currentYear + 1
            }er Version wird vorraussichtlich ab April/Mai erhältlich sein.`}
          />
        )}
        {product && <VariantsTable variants={product.variants} />}
        {product && (
          <SharingButtons
            heading="Teile diesen Kalender"
            title={product.title}
            text={product.shortDescription}
            url={process.env.NEXT_PUBLIC_BASE_URL + '/' + product.slug}
          />
        )}
        {product && <CalendarCarousel excludeProductId={product.id} />}
      </div>
    </Container>
  );
}
