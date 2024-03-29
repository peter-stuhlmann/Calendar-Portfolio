import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from './registry';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const title = 'Kalender 2025 | Peter R. Stuhlmann';
const description =
  'Hochwertige Kalender für 2025 in den Formaten A5, A4, A3 und A2 über jeden Buchhandel bestellbar.';

export const metadata: Metadata = {
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
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://google-analytics.com" />
      </head>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <body className={inter.className}>
          <div>
            <Header />
            {children}
          </div>
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
