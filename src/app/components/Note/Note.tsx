import { FC } from 'react';
import { Container } from './Note.styles';
import { NoteProps } from './Note.types';

const Note: FC<NoteProps> = ({ content }) => {
  return <Container>{content}</Container>;
};

export default Note;
