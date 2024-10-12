import type { Metadata } from 'next';
import { ReactNode } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const title = 'Impressum und Kontakt | kalender.lol';
const description =
  'Finde auf unserer Impressum-Seite alle rechtlichen Informationen, Kontaktdetails und Angaben zum Betreiber der Website kalender.lol';

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

export default function LegalNoticeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
