import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Korukamp - Çanakkale Gelibolu Koruköy'de Doğa ile İç İçe Kamp Deneyimi",
  description:
    "Çanakkale Gelibolu Koruköy'de deniz kenarında, doğayla iç içe, aile dostu kamp alanı. Özel plaj, duşlar, yemek pişirme alanları ve daha fazlası.",
  keywords: "kamp, çadır, doğa, deniz, Gelibolu, Koruköy, aile, tatil, huzur, kamp alanı, plaj, çanakkale",
  authors: [{ name: "Korukamp" }],
  creator: "Korukamp",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.korukamp.com",
    title: "Korukamp - Doğanın Kalbinde Huzur Dolu Bir Kamp Deneyimi",
    description: "Çanakkale Gelibolu Koruköy'de deniz ve doğayla iç içe unutulmaz bir kamp deneyimi",
    siteName: "Korukamp",
    images: [
      {
        url: "/images/korukamp-og.jpg",
        width: 1200,
        height: 630,
        alt: "Korukamp - Doğanın Kalbinde Huzur",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://www.korukamp.com" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />

        {/* Structured Data for SEO */}
        <Script
          id="schema-camping-site"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CampingPitch",
              name: "Korukamp",
              description: "Çanakkale Gelibolu Koruköy'de deniz kenarında, doğayla iç içe kamp alanı.",
              url: "https://www.korukamp.com",
              telephone: "+905XXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Büyük Mithatlar",
                addressLocality: "Koruköy, Gelibolu",
                addressRegion: "Çanakkale",
                postalCode: "17502",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.4,
                longitude: 26.5,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Özel Plaj",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Duş Alanları",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Yemek Pişirme Alanı",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Wi-Fi",
                  value: true,
                },
              ],
              image: [
                "https://www.korukamp.com/images/tent1.png",
                "https://www.korukamp.com/images/beach1.png",
                "https://www.korukamp.com/images/cooking-area.png",
              ],
              priceRange: "₺₺",
            }),
          }}
        />
      </body>
    </html>
  )
}
