'use client';

import Link from 'next/link';
import {
  Accept,
  Backdrop,
  Container,
  Decline,
  Heading,
  Text,
} from './CookieBanner.styles';
import { useEffect } from 'react';
import cookieConsent from '@/app/data/cookieConsent';

export default function CookieBanner({
  handleTracking,
}: {
  handleTracking: (value: boolean) => void;
}): React.JSX.Element {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Backdrop>
      <Container>
        <Heading>{cookieConsent.heading}</Heading>
        {cookieConsent.text.map((t: string) => (
          <Text key={t}>{t}</Text>
        ))}
        <Text $small>
          {cookieConsent.privacyPolicyText}{' '}
          <Link
            href={cookieConsent.privacyPolicyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cookieConsent.privacyPolicy}
          </Link>
          .
        </Text>
        <div>
          <Accept onClick={() => handleTracking(true)}>
            {cookieConsent.accept}
          </Accept>
          <Decline onClick={() => handleTracking(false)}>
            {cookieConsent.decline}
          </Decline>
        </div>
      </Container>
    </Backdrop>
  );
}
