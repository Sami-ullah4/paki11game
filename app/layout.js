import Header from "@/components/Hearder";
import "./globals.css";
import { organizationSchema, websiteSchema } from "@/lib/schema/StructuredData";
import { siteMetadata } from "./metadata";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.defaultTitle,
    template: `%s | ${siteMetadata.siteName}`,
  },
  description: siteMetadata.defaultDescription,
  keywords: siteMetadata.keywords,

  openGraph: {
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: siteMetadata.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "DK999 Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    images: [siteMetadata.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* PWA / mobile meta */}
        <meta name="application-name" content={siteMetadata.siteName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content={siteMetadata.siteName}
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="text-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
