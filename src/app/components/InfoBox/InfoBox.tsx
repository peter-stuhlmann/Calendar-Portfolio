'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Container, Contact } from './InfoBox.styles';
import infoBox from '@/app/data/infoBox';
import { LinkType } from '../../types';

export default function InfoBox(): React.JSX.Element {
  return (
    <Container aria-label={infoBox.ariaLabel}>
      <Image
        src={infoBox.image.src}
        alt={infoBox.image.alt}
        width={infoBox.image.width}
        height={infoBox.image.height}
        sizes="(min-width: 780px) 195px, (min-width: 500px) 150px, calc(100vw - 40px)"
        placeholder="blur"
        blurDataURL={infoBox.image.placeholder}
      />
      <div>
        <div>{infoBox.heading}</div>
        <div>{infoBox.text}</div>
        <Contact>
          <div>{infoBox.contact.heading}</div>
          <ul>
            {infoBox.contact.links.map((link: LinkType) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </Contact>
      </div>
    </Container>
  );
}
