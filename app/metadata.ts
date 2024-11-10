const isDevelopment = process.env.NODE_ENV === 'development';

export const metadata = {
  metadataBase: new URL(
    isDevelopment ? 'http://localhost:3000' : 'https://your-domain.com'
  ),
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
  ]
}; 