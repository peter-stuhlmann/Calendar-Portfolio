'use client';

import InfoBox from './components/InfoBox';
import ProductGrid from './components/ProductGrid';
import SharingButtons from './components/SharingButtons';
import { Container, Heading } from './page.styles';

export default function Home(): React.JSX.Element {
  return (
    <Container>
      <Heading $marginBottom={3}>Kalender</Heading>
      <ProductGrid />
      <SharingButtons
        heading="Teile diese Kalender"
        title={'Kalender von Peter R. Stuhlmann'}
        text={
          'Hochwertige Kalender für 2025 in den Formaten A5, A4, A3 und A2 über jeden Buchhandel bestellbar.'
        }
        url={process.env.NEXT_PUBLIC_BASE_URL as string}
      />
      <InfoBox />
    </Container>
  );
}
