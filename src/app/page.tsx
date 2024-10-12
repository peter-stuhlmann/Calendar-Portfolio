import { FC } from 'react';

import HeroSlider from './components/HeroSlider';
import InfoBox from './components/InfoBox';
import ProductGrid from './components/ProductGrid';
import SharingButtons from './components/SharingButtons';
import { Container, Heading } from './page.styles';

const HomePage: FC = () => {
  return (
    <Container>
      <HeroSlider />
      <div>
        <Heading $marginBottom={3}>Dekorative Wandkalender 2025</Heading>
        <ProductGrid />
        <SharingButtons
          heading="Teile diese Kalender"
          title={'Kalender von Peter R. Stuhlmann'}
          text={
            'Hochwertige Kalender für 2025 in den Formaten A5, A4, A3 und A2 über jeden Buchhandel bestellbar. Erstellt mit KI und Fotos von Peter Stuhlmann.'
          }
          url={process.env.NEXT_PUBLIC_BASE_URL as string}
        />
        <InfoBox />
      </div>
    </Container>
  );
};

export default HomePage;
