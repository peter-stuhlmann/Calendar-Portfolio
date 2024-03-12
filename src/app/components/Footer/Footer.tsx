'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Cookies from 'js-cookie';

import footer from '@/app/data/footer';
import { Container } from './Footer.styles';
import { LinkType } from '@/app/types';
import CookieBanner from '../CookieBanner';

const COOKIE_DURATION = 30; // days

const GoogleAnalytics = dynamic(() => import('@/app/utils/analytics'), {
  ssr: false,
});

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  const [isTrackingEnabled, setIsTrackingEnabled] = useState<boolean>(false);
  const [isCookieEvaluated, setIsCookieEvaluated] = useState<boolean>(false);
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(true);

  useEffect(() => {
    const trackingCookie = Cookies.get('cookies-accepted');
    const trackingEnabled: boolean = trackingCookie === 'true';
    setIsTrackingEnabled(trackingEnabled);

    if (trackingCookie) {
      setShowCookieBanner(false);
    } else {
      setShowCookieBanner(true);
    }

    setIsCookieEvaluated(true);
  }, []);

  const handleTracking = (value: boolean) => {
    Cookies.set('cookies-accepted', value.toString(), {
      expires: COOKIE_DURATION,
    });
    setIsTrackingEnabled(value);
    setShowCookieBanner(false);
  };

  return (
    <>
      {isCookieEvaluated && showCookieBanner && (
        <CookieBanner handleTracking={handleTracking} />
      )}
      {isTrackingEnabled && <GoogleAnalytics />}
      <Container>
        <Link href={footer.copyright.href} target="_blank">
          {footer.copyright.title}, 2024{' '}
          {currentYear > 2024 && <>- {currentYear}</>}
        </Link>
        <ul>
          {isCookieEvaluated && (
            <li onClick={() => handleTracking(!isTrackingEnabled)}>
              <span>
                {isTrackingEnabled ? (
                  <>Cookies ablehnen</>
                ) : (
                  <>Cookies erlauben</>
                )}
              </span>
            </li>
          )}

          {footer.links.map((link: LinkType) => (
            <li key={link.href}>
              <Link href={link.href} target="_blank">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
