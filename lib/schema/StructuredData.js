// ==================== STRUCTURED DATA / JSON-LD SCHEMAS ====================
// Centralized schema management for paki11 Game SEO

const SITE_URL = "https://paki11game.vercel.app/";
const SITE_NAME = "paki11 Game";
const LOGO_URL = "https://paki11game.vercel.app/paki11.webp";

// 1) Organization Schema - Company/Brand info
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["paki11", "paki11 App", "paki11 APK"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  description:
    "paki11 is Pakistan's leading mobile gaming platform offering slots, card games, live casino & sports betting with real money rewards.",
  email: "mrdeveloper004@gmail.com ",
  areaServed: {
    "@type": "Country",
    name: "Pakistan",
  },
  foundingDate: "2024",
  sameAs: [
    // Add social media profiles when available
    // "https://facebook.com/paki11game",
    // "https://twitter.com/paki11game",
    // "https://instagram.com/paki11game"
  ],
};

// 2) Website Schema - Site-wide search & navigation
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Download paki11 Game APK official latest version 2025. Best earning app in Pakistan with slots, card games, live casino & sports betting.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-PK",
};

// 3) SoftwareApplication Schema - App/Game details
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#app`,
  name: SITE_NAME,
  operatingSystem: ["Android 5.0+", "iOS 12.0+"],
  applicationCategory: "GameApplication",
  applicationSubCategory: "Casino Game",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PKR",
    availability: "https://schema.org/InStock",
  },
  description:
    "paki11 Game offers exciting slots, card games, live casino & sports betting with real money rewards. Safe withdrawals via JazzCash & Easypaisa. Get 500 PKR welcome bonus!",
  downloadUrl: `${SITE_URL}/download`,
  installUrl: `${SITE_URL}/download`,
  softwareVersion: "2.0",
  fileSize: "45MB",
  datePublished: "2024-01-01",
  dateModified: "2025-01-30",
  releaseNotes: "Latest version with improved performance and new games",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  screenshot: [
    {
      "@type": "ImageObject",
      url: `${SITE_URL}/gmae/paki11urdu.webp`,
      caption: "paki11 Game Main Interface",
    },
    {
      "@type": "ImageObject",
      url: `${SITE_URL}/gmae/fishgame.webp`,
      caption: "paki11 Fish Game",
    },
    {
      "@type": "ImageObject",
      url: `${SITE_URL}/gmae/slotgame.webp`,
      caption: "paki11 Slot Games",
    },
  ],
  featureList: [
    "Slots & Casino Games",
    "Card Games",
    "Sports Betting",
    "Live Casino",
    "JazzCash Withdrawal",
    "Easypaisa Withdrawal",
    "24/7 Customer Support",
    "Welcome Bonus 500 PKR",
  ],
  requirements: "Android 5.0+ or iOS 12.0+",
  permissions: "Internet access required",
};

// 3b) ImageObject Schema - Primary brand image
export const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": `${SITE_URL}/#logo`,
  url: LOGO_URL,
  contentUrl: LOGO_URL,
  width: 512,
  height: 512,
  caption: "paki11 Game Logo",
  representativeOfPage: true,
};

// 3c) Product Schema - App as a Product
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/#product`,
  name: "paki11 Game APK",
  description:
    "Official paki11 Game APK for Android & iOS. Play slots, card games, live casino & sports betting with real money rewards.",
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
  manufacturer: {
    "@id": `${SITE_URL}/#organization`,
  },
  image: [LOGO_URL],
  sku: "paki11-APK-2.0",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PKR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/download`,
  },
};

// 3d) Review Schema - Product review sample (without rating)
export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": `${SITE_URL}/#review`,
  itemReviewed: {
    "@id": `${SITE_URL}/#product`,
  },
  author: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  reviewBody:
    "paki11 offers smooth gameplay, fast withdrawals, and a wide variety of casino-style games for Pakistani players.",
  datePublished: "2025-01-30",
};

// 4) FAQ Schema - FAQ Page structured data
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Is paki11 Game legit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, paki11 is a legit and trusted gaming app for Pakistani players who want to earn real money. The platform offers secure transactions via JazzCash and Easypaisa with 24/7 customer support.",
      },
    },
    {
      "@type": "Question",
      name: "How to Withdraw from paki11 Game APK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can withdraw your winnings through JazzCash, Easypaisa, or bank transfer. Go to the wallet section, select withdrawal, enter the amount, and choose your preferred payment method. Withdrawals are processed within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "How to download paki11 Game APK on PC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To enjoy paki11 on PC, download and install an Android emulator like BlueStacks or LDPlayer. Then download the paki11 APK and install it within the emulator to play on your computer.",
      },
    },
    {
      "@type": "Question",
      name: "Is paki11 available for iOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Currently, paki11 APK is designed for Android devices. However, iOS users can access paki11 through the web browser at paki11apk.com for a similar gaming experience.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum deposit for paki11?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum deposit for paki11 is 100 PKR. You can deposit via JazzCash, Easypaisa, or bank transfer. New users get a welcome bonus of up to 500 PKR on their first deposit.",
      },
    },
  ],
};

// 5) WebPage Schema - Generic page template
export const createWebPageSchema = (pageData) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${pageData.path}#webpage`,
  url: `${SITE_URL}${pageData.path}`,
  name: pageData.title,
  description: pageData.description,
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en_US",
  datePublished: pageData.datePublished || "2024-01-01",
  dateModified: pageData.dateModified || "2025-01-30",
});

// 6) BreadcrumbList Schema - Navigation breadcrumbs
export const createBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

// 7) Home Page Breadcrumb
export const homeBreadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
]);

// 8) Download Page Breadcrumb
export const downloadBreadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Download", path: "/download" },
]);

// 10) Article Schema - For blog/article content
export const createArticleSchema = (articleData) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE_URL}${articleData.path}#article`,
  headline: articleData.title,
  description: articleData.description,
  image: articleData.image || LOGO_URL,
  author: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  datePublished: articleData.datePublished || "2024-01-01",
  dateModified: articleData.dateModified || "2025-01-30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${articleData.path}`,
  },
});

// 11) Home Page combined schema (graph)
export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    softwareApplicationSchema,
    imageObjectSchema,
    productSchema,
    reviewSchema,
    faqSchema,
    homeBreadcrumbSchema,
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "paki11 Game Download APK (Official) Latest Version 2025 | Pakistan",
      description:
        "Download paki11 Game APK official latest version 2025. Best earning app in Pakistan with slots, card games, live casino & sports betting.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#app` },
      inLanguage: "en_US",
    },
  ],
};

// 12) Download Page combined schema (graph)
export const downloadPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    imageObjectSchema,
    productSchema,
    reviewSchema,
    downloadBreadcrumbSchema,
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/download#webpage`,
      url: `${SITE_URL}/download`,
      name: "Download paki11 Game APK v2.0 Free | Android & iOS",
      description:
        "Download paki11 Game APK v2.0 latest version free for Android & iOS. Step-by-step installation guide included. 100% safe, virus-free APK.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#app` },
      inLanguage: "en_US",
    },
    {
      "@type": "HowTo",
      name: "How to Download and Install paki11 APK",
      description:
        "Step-by-step guide to download and install paki11 Game APK on Android",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Download APK",
          text: "Click the download button to get the paki11 APK file",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Enable Unknown Sources",
          text: "Go to Settings > Security > Enable 'Unknown Sources' to allow APK installation",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Install APK",
          text: "Open the downloaded APK file and tap 'Install'",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Launch Game",
          text: "Open paki11 Game, register your account, and claim your welcome bonus",
        },
      ],
      totalTime: "PT5M",
    },
  ],
};

// ==================== COMPONENT ====================
// Renders JSON-LD structured data in <head>
export const StructuredData = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;
