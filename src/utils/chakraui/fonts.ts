import { Rubik, Poppins, Inter } from 'next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const fontConfig = {
  heading: 'var(--font-poppins)',
  body: 'var(--font-inter)',
  mono: 'var(--font-rubik)',
};
