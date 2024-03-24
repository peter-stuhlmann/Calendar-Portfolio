'use client';

import Link from 'next/link';
import { Container } from './Header.styles';
import Logo from '../Logo';

export default function Header(): React.JSX.Element {
  return (
    <Container>
      <Link href="/">
        <Logo />
      </Link>
    </Container>
  );
}
