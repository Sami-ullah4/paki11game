import { homePageSchema } from "@/lib/schema/StructuredData";
import { siteMetadata } from "./metadata";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
const Artical1 = dynamic(() => import("@/components/Artical1"));
const Artical2 = dynamic(() => import("@/components/Artical2"));
const Artical3 = dynamic(() => import("@/components/Artical3"));

// ✅ Dynamic metadata for the home page
export async function generateMetadata() {
  const title = siteMetadata.homeTitle;
  const description = siteMetadata.homeDescription;
  const keywords = siteMetadata.homeKeywords;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description,
      url: siteMetadata.siteUrl,
      siteName: siteMetadata.siteName,
      type: "website",
      images: [
        {
          url: siteMetadata.homeOgImage,
          width: 1200,
          height: 630,
          alt: "DK999 Game - Best Earning App in Pakistan",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteMetadata.homeOgImage],
    },
  };
}

export default function Home() {
  return (
    <main className="">
      {/* Home Page Schema (Organization, Website, App, Product, Review, FAQ, Breadcrumb) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Hero />
      <Artical1/>
      <Artical2/>
      <Artical3/>
    </main>
  );
}
