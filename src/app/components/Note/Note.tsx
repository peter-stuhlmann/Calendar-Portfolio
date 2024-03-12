'use client';

import { Container } from './Note.styles';

export default function Note({
  content,
}: {
  content: string;
}): React.JSX.Element {
  return <Container>{content}</Container>;
}
