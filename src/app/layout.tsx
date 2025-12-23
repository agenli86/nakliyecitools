import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nakliyeci Araçları - Sözleşme, Teklif ve Makbuz Oluşturucu",
  description: "Nakliyeciler için profesyonel sözleşme, teklif mektubu ve makbuz oluşturma araçları. Ücretsiz kullanım.",
  keywords: "nakliye sözleşmesi, taşıma sözleşmesi, nakliye teklifi, nakliye makbuzu, evden eve nakliyat",
  // Bahsettiğin Meta Etiketi Buraya Ekledik:
  other: {
    "google-adsense-account": "ca-pub-9395277314770577",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Reklam Gösterimi İçin Gerekli Script */}
        <Script
          id="adsbygoogle-js"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9395277314770577"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
