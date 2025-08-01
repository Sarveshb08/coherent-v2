import {Inter,Lusitana} from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const lusitana = Lusitana({
    weight: ['400','700'],
    subsets :['latin'],
    display: 'swap',
    fallback: ['serif'],
});