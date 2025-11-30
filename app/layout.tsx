import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LX Apparel | Viral Meme Shirts & Premium Tees',
  description: 'December 2025 drops. Viral memes on premium quality tees. Shop the internet\'s finest moments. TikTok Shop available.',
  keywords: 'meme shirts, viral tees, LX Apparel, December 2025, TikTok Shop, premium apparel',
  openGraph: {
    title: 'LX Apparel | Viral Meme Shirts',
    description: 'Viral Memes. Premium Tees. Unmatched Vibes.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
