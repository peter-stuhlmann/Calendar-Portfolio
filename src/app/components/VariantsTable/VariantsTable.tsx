import Link from 'next/link';
import { FC } from 'react';

import { Container } from './VariantsTable.styles';
import { VariantsTableProps } from './VariantsTable.types';

import { Variant } from '@/app/types';
import ExternalLink from '../icons/ExternalLink';
import formatISBN from '@/app/utils/formatISBN';
import formatPrice from '@/app/utils/formatPrice';

const PARTNER_TAG = process.env.NEXT_PUBLIC_PARTNER_TAG;
const THALIA_AFFILIATE_LINK = process.env.NEXT_PUBLIC_THALIA_AFFILIATE_LINK;

const VariantsTable: FC<VariantsTableProps> = ({ variants }) => {
  function getDinFormat(size: string) {
    const normalizedSize = size.toLowerCase();

    switch (normalizedSize) {
      case 'a5':
        return 'DIN A5 Tisch';
      case 'a4':
        return 'DIN A4 Wand';
      case 'a3':
        return 'DIN A3 Wand';
      case 'a2':
        return 'DIN A2 Wand';
      case 'a2p':
        return 'DIN A2 Premium';
      case 'fam':
        return 'Familienplaner';
      default:
        return '';
    }
  }

  return (
    <Container aria-label="Formate und Preise der Kalender">
      <ul>
        <li>
          <div>Format</div>
          <div>Preis</div>
          <div>ISBN</div>
          <div>Link zum Shop</div>
        </li>
        {variants.map((variant: Variant, idx: number) => (
          <li key={variant.format + idx}>
            <div aria-label="Format">
              <span aria-hidden="true">Format:</span>
              {variant.format && getDinFormat(variant.format)}
            </div>
            <div aria-label="Preis">
              <span aria-hidden="true">Preis:</span>
              {variant.price && <>{formatPrice(variant.price)} EUR*</>}
            </div>
            <div aria-label="ISBN">
              <span aria-hidden="true">ISBN:</span>
              {variant.isbn && <>{formatISBN(variant.isbn)}</>}
            </div>
            <div aria-label="Link zum Shop">
              <span aria-hidden="true">Link zum Shop:</span>
              {variant.amazon && (
                <div>
                  <Link
                    href={`${variant.amazon}${
                      PARTNER_TAG && `?tag=${PARTNER_TAG}`
                    }`}
                    aria-label="Externer Link zu Amazon"
                    target="_blank"
                    rel="noopener sponsored"
                  >
                    Amazon <ExternalLink aria-hidden="true" />
                  </Link>
                </div>
              )}
              {variant.thalia && (
                <div>
                  <Link
                    href={`${THALIA_AFFILIATE_LINK}${variant.thalia}`}
                    aria-label="Externer Link zu Thalia"
                    target="_blank"
                    rel="noopener sponsored"
                  >
                    Thalia <ExternalLink aria-hidden="true" />
                  </Link>
                </div>
              )}
              <div>
                {!variant.amazon && !variant.thalia && <>in Kürze verfügbar</>}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>
        * Kalender unterliegen nicht der Buchpreisbindung. Die Preise können
        daher je nach Händler abweichen.
      </p>
    </Container>
  );
};

export default VariantsTable;
