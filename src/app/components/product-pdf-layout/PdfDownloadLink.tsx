'use client';

import { FC } from 'react';
import { BlobProvider, PDFViewer } from '@react-pdf/renderer';
import Link from 'next/link';

import { Container } from './PdfDownloadLink.styles';
import PdfLayout from './PdfLayout';
import PdfIcon from './icons/PdfIcon';
import { Product } from '@/app/types';

export type PdfDownloadLinkComponentProps = {
  data: Product;
};

const PdfDownloadLinkComponent: FC<PdfDownloadLinkComponentProps> = ({
  data,
}) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Container>
      <BlobProvider document={<PdfLayout data={data} />}>
        {({ blob, loading, error }) => {
          if (loading) {
            return 'PDF wird erstellt...';
          }

          if (error) {
            return (
              <>
                <div>Fehler beim Erstellen des PDF-Dokuments.</div>
                <button onClick={handleRefresh}>Seite erneut laden</button>
              </>
            );
          }

          if (!blob) {
            return null;
          }

          const url = URL.createObjectURL(blob);

          return (
            <Link
              prefetch={false}
              href={url}
              download={`${data.slug}-kalender-lol.pdf`}
              target="_blank"
            >
              <PdfIcon />
              <span>Download PDF</span>
            </Link>
          );
        }}
      </BlobProvider>
    </Container>
  );
};

export default PdfDownloadLinkComponent;
