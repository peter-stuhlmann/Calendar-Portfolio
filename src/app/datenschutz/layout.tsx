import type { Metadata } from 'next';
import { ReactNode } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const title = 'Datenschutzerklärung | kalender.lol';
const description =
  'Erfahre, wie wir Deine persönlichen Daten schützen und verwenden. Unsere Datenschutzerklärung bietet Informationen zur Datenerfassung und -verarbeitung.';

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

export default function PrivacyPolicyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
