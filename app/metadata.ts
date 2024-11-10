import { Metadata } from 'next';

const isDevelopment = process.env.NODE_ENV === 'development';
const baseUrl = isDevelopment ? 'http://localhost:3000' : 'https://your-domain.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Airbnb Revenue Calculator & Dynamic Pricing Tool | Free Estimator',
  description: 'Free Airbnb revenue calculator with AI-powered pricing recommendations, seasonal adjustments, and market analysis. Maximize your rental income with data-driven insights.',
  keywords: [
    'airbnb calculator',
    'vacation rental revenue calculator',
    'airbnb profit calculator',
    'airbnb income estimator',
    'short term rental calculator',
    'airbnb pricing tool',
    'vacation rental income',
    'airbnb roi calculator',
    'rental property calculator',
    'airbnb occupancy rate calculator'
  ],
  openGraph: {
    type: 'website',
    title: 'Airbnb Revenue Calculator & Dynamic Pricing Tool',
    description: 'Calculate your potential Airbnb revenue with our free AI-powered tool',
    url: `${baseUrl}/calculator`,
    images: [{
      url: `${baseUrl}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Airbnb Revenue Calculator'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airbnb Revenue Calculator',
    description: 'Free Airbnb revenue calculator with AI-powered pricing recommendations',
    images: [`${baseUrl}/twitter-image.jpg`]
  }
}; 