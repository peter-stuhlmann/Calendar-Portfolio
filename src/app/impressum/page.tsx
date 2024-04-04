'use client';

import { Container, Heading } from '../page.styles';
import legalNotice from '@/app/data/legal-notice';

export default function LegalNoticePage(): React.JSX.Element {
  return (
    <Container $textAlign="left">
      <div>
        <Heading>{legalNotice.heading}</Heading>
        {legalNotice.text.map((section: string) => (
          <section
            key={section}
            dangerouslySetInnerHTML={{ __html: section }}
          />
        ))}
      </div>
    </Container>
  );
}
