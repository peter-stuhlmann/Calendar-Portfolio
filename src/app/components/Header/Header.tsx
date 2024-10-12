import Link from 'next/link';

import { Container } from './Header.styles';
import Logo from '../Logo';

const Header = () => {
  return (
    <Container>
      <Link href="/" aria-label="Gehe zurück zur Startseite">
        <Logo />
      </Link>
    </Container>
  );
};

export default Header;
