import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'World Recipes Kitchen - Authentic Global Cuisine',
  description: 'Discover authentic recipes from around the world, featuring traditional dishes, cooking techniques, and flavors from diverse culinary traditions.',
  keywords: 'recipes, cooking, world cuisine, international food, traditional dishes',
  authors: [{ name: 'World Recipes Kitchen' }],
  creator: 'World Recipes Kitchen',
  publisher: 'World Recipes Kitchen',
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
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍳</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍳</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'World Recipes Kitchen - Authentic Global Cuisine',
    description: 'Discover authentic recipes from around the world, featuring traditional dishes, cooking techniques, and flavors from diverse culinary traditions.',
    siteName: 'World Recipes Kitchen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Recipes Kitchen - Authentic Global Cuisine',
    description: 'Discover authentic recipes from around the world, featuring traditional dishes, cooking techniques, and flavors from diverse culinary traditions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get bucket slug from environment variable for the badge
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CosmicBadge bucketSlug={bucketSlug} />
        </div>
      </body>
    </html>
  )
}