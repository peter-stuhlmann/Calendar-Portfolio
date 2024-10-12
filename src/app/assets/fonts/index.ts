import { Poppins } from 'next/font/google';

export const primaryFont = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--primary-font',
});
