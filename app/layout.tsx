import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { metadata as seoMetadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...seoMetadata,
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Airbnb Revenue Calculator & Dynamic Pricing Tool',
    description: 'Calculate your potential Airbnb revenue with our free AI-powered tool',
    type: 'website',
    url: 'https://your-domain.com/calculator',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Airbnb Revenue Calculator'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airbnb Revenue Calculator',
    description: 'Free Airbnb revenue calculator with AI-powered pricing recommendations',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}