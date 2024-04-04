'use client';

import { Container, Heading } from '../page.styles';
import privacyPolicy from '@/app/data/privacy-policy';

export default function PrivacyPolicyPage(): React.JSX.Element {
  return (
    <Container $textAlign="left">
      <Heading>{privacyPolicy.heading}</Heading>
      {privacyPolicy.text.map((section: string) => (
        <section key={section} dangerouslySetInnerHTML={{ __html: section }} />
      ))}
    </Container>
  );
}
