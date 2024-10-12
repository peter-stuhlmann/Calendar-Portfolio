import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

import StyledComponentsRegistry from './registry';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';

import { primaryFont } from './assets/fonts';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const title = 'Kalender 2025 von Peter R. Stuhlmann | kalender.lol';
const description =
  'Hochwertige Kalender für 2025 in den Formaten A5, A4, A3 und A2 über jeden Buchhandel bestellbar. Erstellt mit KI und Fotos von Peter Stuhlmann.';

export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: 'website',
    title: title,
    description: description,
    siteName: 'Kalender von Peter R. Stuhlmann | kalender.lol',
    images: [
      {
        url: `/img/kalender.jpg`,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <html lang="de">
        <head>
          <link rel="preconnect" href="https://google-analytics.com" />
        </head>
        <body className={`${primaryFont.variable}`}>
          <div>
            <Header />
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
