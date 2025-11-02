import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dermaglare Skin - Dr Jabu Nkehli | Dermatology & Skin Care',
  description: 'Specialist Dermatologist in Johannesburg. Expert dermatology care for skin, hair, and nails. Book your appointment with Dr. Jabu Nkehli today.',
  keywords: 'dermatologist, skin care, Johannesburg, Dr Jabu Nkehli, dermatology, skin treatment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}