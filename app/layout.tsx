import 'css/tailwind.css'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'
import Script from 'next/script'
import { LsdThemeStyles } from '@acid-info/lsd-react/theme'
import '@acid-info/lsd-react/css'

const spaceMono = localFont({
  src: '../public/fonts/SpaceMono-Regular.ttf',
  display: 'swap',
  variable: '--font-space-mono',
})

const spaceGrotesk = localFont({
  src: '../public/fonts/SpaceGrotesk-Regular.ttf',
  display: 'swap',
  variable: '--font-space-grotesk',
})

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
    <html
      lang={siteMetadata.language}
      className={`scroll-smooth ${spaceMono.className} ${spaceGrotesk.className} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <LsdThemeStyles />
      </head>
      <body className="bg-white text-black dark:bg-gray-950 dark:text-white">
        <main>{children}</main>
        <Footer />
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
