'use client';

import Link from 'next/link';
import { Container } from './Header.styles';

export default function Header(): React.JSX.Element {
  return (
    <Container>
      <Link href="/">Kalender von Peter R. Stuhlmann</Link>
    </Container>
  );
}
