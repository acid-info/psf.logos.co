import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'
import Script from 'next/script'
import { CSSBaseline, defaultThemes } from '@acid-info/lsd-react'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: 'https://psf.logos.co/',
    siteName: siteMetadata.title,
    images: [
      {
        url: 'https://psf.logos.co/og.png',
        width: 1200,
        height: 630,
        alt: 'Parallel Society Festival',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
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
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteMetadata.language} suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <head>
        <style>{defaultThemes.light.globalStyles}</style>
        <CSSBaseline />
      </head>
      <body>
        <main className="mb-auto">{children}</main>
        <Script
          strategy="afterInteractive"
          src="https://umami.bi.status.im/script.js"
          data-website-id="efcd0186-2adc-41d7-91d3-777cad4536cf"
          data-domains="psf.logos.co"
        />
      </body>
    </html>
  )
}
