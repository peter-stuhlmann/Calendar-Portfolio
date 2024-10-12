import { FC } from 'react';

import { Container, Heading } from '../page.styles';
import legalNotice from '@/app/data/legal-notice';

const LegalNoticePage: FC = () => {
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
};

export default LegalNoticePage;
