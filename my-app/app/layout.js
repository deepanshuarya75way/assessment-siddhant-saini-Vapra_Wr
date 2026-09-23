import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeaderShell } from "@/components/header-shell";
import { FooterMap } from "@/components/footer-map";
import { ClerkAuthShell } from "@/components/clerk-auth-shell";
import { ChatbotWidget } from "@/components/chatbot-widget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const SITE_URL = "https://vapraworkshop.com";

export const metadata = {
  title: "Vapra Workshop | Expert Auto Repair in Bikaner",
  description:
    "Expert car repair and garage services including oil change, brake repair, engine diagnostics, tyre replacement and general servicing in Bikaner, Rajasthan.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Your existing metadata and JSON-LD tags stay exactly the same */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Expert car repair and garage services including oil change, brake repair, engine diagnostics, tyre replacement and general servicing in Bikaner, Rajasthan." />
        <meta name="keywords" content="car repair Bikaner, garage services Bikaner, oil change, brake repair, engine diagnostics, tyre replacement, vehicle servicing, auto maintenance Rajasthan" />
        <meta name="author" content="Vapra Workshop" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vapraworkshop.com" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Bikaner" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vapraworkshop.com" />
        <meta property="og:title" content="Vapra Workshop | Trusted Auto Repair in Bikaner" />
        <meta property="og:description" content="Expert car repair and garage services including oil change, brake repair, engine diagnostics, tyre replacement and general servicing." />
        <meta property="og:image" content="https://vapraworkshop.com/images/preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Vapra Workshop" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@VapraWorkshop" />
        <meta name="twitter:creator" content="@VapraWorkshop" />
        <meta name="twitter:title" content="Vapra Workshop | Expert Car Repair in Bikaner" />
        <meta name="twitter:description" content="Expert car repair and garage services including oil change, brake repair, engine diagnostics, tyre replacement and general servicing." />
        <meta name="twitter:image" content="https://vapraworkshop.com/images/preview.jpg" />
        <meta name="twitter:image:alt" content="Vapra Workshop - Professional Auto Repair Services in Bikaner" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Vapra Workshop",
              image: "https://vapraworkshop.com/images/preview.jpg",
              url: "https://vapraworkshop.com",
              telephone: "+91-7062416273",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Chungi Chowki, Gajner road, Antyodaya Nagar",
                addressLocality: "Bikaner",
                addressRegion: "Rajasthan",
                postalCode: "334001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.022544",
                longitude: "73.311083",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/share/18GGSfqFTn/",
                "https://www.instagram.com/vapra_workshop_bkn/",
                "https://youtube.com/@ashokdevra2986",
              ],
            }),
          }}
        />

        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </head>
      <body className={`${inter.className}`}>
        {/* Load the injector before the configuration script initializes the bot. */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v5.0/inject.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2026/09/23/06/20260923064956-BFZ9YCQE.js"
          strategy="afterInteractive"
        />
        <ClerkAuthShell>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <HeaderShell />
            <main className="min-h-screen pt-24">{children}</main>
            
            {/* Custom Widget rendered here */}
            <ChatbotWidget />
            
            {/* Footer code remains identical... */}
            <footer className="bg-gray-900 text-gray-100 py-16 border-t border-gray-800">
              {/* ... Footer Content ... */}
            </footer>
          </ThemeProvider>
        </ClerkAuthShell>
      </body>
    </html>
  );
}