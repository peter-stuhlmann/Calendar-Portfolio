'use client';

import Link from 'next/link';
import { Container, Heading, ShortDescription } from '../page.styles';
import Image from 'next/image';
import styled from 'styled-components';

export default function NotFound() {
  return (
    <Container>
      <Heading>Diesen Kalender gibt es nicht (mehr)</Heading>
      <ShortDescription>
        Aber es gibt viele andere <Link href="/">hier</Link>.
      </ShortDescription>
      <Image
        src={`/img/404.jpg`}
        alt={'404'}
        width={640}
        height={360}
        sizes="(min-width: 1100px) 640px, (min-width: 680px) 600px, (min-width: 500px) 420px, (min-width: 400px) 380px, 280px"
        priority
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <Button>
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </Container>
  );
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  a {
    text-decoration: none;
    background-color: #fff;
    color: inherit;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    font-size: inherit;

    &:hover {
      opacity: 0.8;
    }
  }
`;
