import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nakliyeci Araçları - Sözleşme, Teklif ve Makbuz Oluşturucu",
  description: "Nakliyeciler için profesyonel sözleşme, teklif mektubu ve makbuz oluşturma araçları. Ücretsiz kullanım.",
  keywords: "nakliye sözleşmesi, taşıma sözleşmesi, nakliye teklifi, nakliye makbuzu, evden eve nakliyat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
