import { FC } from 'react';

import { Container, Heading } from '../page.styles';
import privacyPolicy from '@/app/data/privacy-policy';

const PrivacyPolicyPage: FC = () => {
  return (
    <Container $textAlign="left">
      <div>
        <Heading>{privacyPolicy.heading}</Heading>
        {privacyPolicy.text.map((section: string) => (
          <section
            key={section}
            dangerouslySetInnerHTML={{ __html: section }}
          />
        ))}
      </div>
    </Container>
  );
};

export default PrivacyPolicyPage;
