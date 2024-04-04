'use client';

import Link from 'next/link';

import { Container } from './SharingButtons.styles';
import sharingButtons from '@/app/data/sharingButtons';
import { SharingButton } from '@/app/types';
import NativeShareButton from './NativeShare';
import isMobileDevice from '@/app/utils/isMobileDevice';
import { useEffect, useState } from 'react';

export default function SharingButtons({
  heading,
  title,
  text,
  url,
}: {
  heading: string;
  title: string;
  text: string;
  url: string;
}): React.JSX.Element {
  const [canNativeShare, setCanNativeShare] = useState<boolean>(false);

  useEffect(() => {
    const isNativeShareAvailable =
      isMobileDevice() &&
      typeof navigator !== 'undefined' &&
      navigator.share !== undefined;

    setCanNativeShare(isNativeShareAvailable);
  }, []);

  return (
    <Container>
      <div>{heading}</div>
      <ul>
        {canNativeShare && (
          <li>
            <NativeShareButton title={title} text={text} url={url} />
          </li>
        )}
        {!canNativeShare &&
          sharingButtons.map((button: SharingButton) => (
            <li key={button.title}>
              <Link
                href={`${button.href}${url}`}
                aria-label={button.description}
                target="_blank"
                rel="noopener noreferrer"
              >
                {button.icon}
              </Link>
            </li>
          ))}
      </ul>
    </Container>
  );
}
