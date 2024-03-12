import type { Metadata } from 'next';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import products from '../data/products';
import { Product } from '../types';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export async function generateMetadata({
  params,
}: {
  params: { product: string };
}): Promise<Metadata> {
  const product = params.product;

  const metaData = products.find((route: Product) => route.slug === product);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const title =
    metaData?.title || 'Error 404' + ' | Kalender von Peter Stuhlmann';
  const description = metaData?.shortDescription;

  return {
    title: title,
    description: description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: 'website',
      title: title,
      description: description,
      siteName: 'Kalender von Peter Stuhlmann',
      images: [
        {
          url: `/img/${metaData?.id}_0.jpg`,
        },
      ],
    },
  };
}
