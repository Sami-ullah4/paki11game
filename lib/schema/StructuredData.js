// ==================== STRUCTURED DATA / JSON-LD SCHEMAS ====================
// Paki11 Game SEO - SIMPLIFIED VERSION
// =========================================================================

const SITE_URL = "https://paki11game.com.pk";
const SITE_NAME = "Paki11 Game";
const LOGO_URL = "https://paki11game.com.pk/Paki11.webp";
const CURRENT_DATE = "2025-01-30";
const PUBLISHED_DATE = "2024-01-01";
const CONTACT_EMAIL = "Pakmody1@gmail.com";

// Helper: Remove @context for @graph usage
const forGraph = (schema) => {
  const { "@context": _, ...rest } = schema;
  return rest;
};

// ==================== 1) ORGANIZATION SCHEMA ====================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["Paki11", "Paki11 App", "Paki11 APK", "Paki11 Pakistan"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: LOGO_URL,
    contentUrl: LOGO_URL,
    width: 512,
    height: 512,
    caption: "Paki11 Game Official Logo",
  },
  image: LOGO_URL,
  description:
    "Paki11 Game is Pakistan's leading online casino app offering slots, card games, live casino and sports betting with real money rewards. Download the official Paki11 APK for Android and start winning today!",
  email: CONTACT_EMAIL,
  foundingDate: "2024-01-01",
  areaServed: {
    "@type": "Country",
    name: "Pakistan",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    availableLanguage: ["en"],
    email: CONTACT_EMAIL,
  },
  slogan: "Pakistan's #1 Earning Game App",
};

// ==================== 2) WEBSITE SCHEMA ====================
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "Paki11 APK Official",
  url: SITE_URL,
  description:
    "Paki11 Game is Pakistan's leading online casino app offering slots, card games, live casino and sports betting with real money rewards. Download the official Paki11 APK for Android and start winning today!",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en",
  copyrightYear: 2024,
  copyrightHolder: {
    "@id": `${SITE_URL}/#organization`,
  },
};

// ==================== 3) SOFTWARE APPLICATION SCHEMA ====================
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": ["SoftwareApplication", "MobileApplication"],
  "@id": `${SITE_URL}/#app`,
  name: SITE_NAME,
  alternateName: ["Paki11 APK", "Paki11 App", "Paki11 Game APK"],
  operatingSystem: "Android 5.0+",
  applicationCategory: "GameApplication",
  applicationSubCategory: "Casino Game",

  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PKR",
    availability: "https://schema.org/InStock",
  },

  description:
    "Paki11 Game is Pakistan's leading online casino app offering slots, card games, live casino and sports betting with real money rewards. Download the official Paki11 APK for Android and start winning today!",

  downloadUrl: SITE_URL,
  installUrl: SITE_URL,

  softwareVersion: "2.0.0",
  fileSize: "45MB",
  datePublished: PUBLISHED_DATE,
  dateModified: CURRENT_DATE,
  releaseNotes:
    "Latest version 2.0 with improved performance, new slot games, and faster withdrawals",

  author: {
    "@id": `${SITE_URL}/#organization`,
  },
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  contentRating: "Mature 18+",

  screenshot: [
    {
      "@type": "ImageObject",
      url: `${SITE_URL}/game/Paki11urdu.webp`,
      caption: "Paki11 Game Main Interface",
      width: 1080,
      height: 1920,
    },
    {
      "@type": "ImageObject",
      url: `${SITE_URL}/game/fishgame.webp`,
      caption: "Paki11 Fish Shooting Game",
      width: 1080,
      height: 1920,
    },
    {
      "@type": "ImageObject",
      url: `${SITE_URL}/game/slotgame.webp`,
      caption: "Paki11 Slot Machine Games",
      width: 1080,
      height: 1920,
    },
  ],

  featureList: [
    "100+ Slot Games",
    "Card Games (Teen Patti, Rummy)",
    "Sports Betting",
    "Live Casino with Real Dealers",
    "JazzCash Instant Withdrawal",
    "Easypaisa Payment Support",
    "Bank Transfer Option",
    "24/7 Customer Support",
    "Welcome Bonus 500 PKR",
    "Daily Login Rewards",
    "Referral Bonus Program",
  ],

  memoryRequirements: "2GB RAM",
  storageRequirements: "100MB",
  permissions: "Internet access, Storage access",
};

// ==================== 4) FAQ SCHEMA ====================
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  name: "Paki11 Game Frequently Asked Questions",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Paki11 Game legit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes it is a legit and real app for Pakistani players who want to make some real money.",
      },
    },
    {
      "@type": "Question",
      name: "How to Withdraw from Paki11 Game APK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unfortunately you cannot download the app on your iOS, however you can use the app on your browser.",
      },
    },

    {
      "@type": "Question",
      name: "Is Paki11 available for iOS or iPhone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Currently, Paki11 APK is optimized for Android devices. iOS users can access Paki11 through the mobile web browser at Paki11apk.info.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum deposit for Paki11?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum deposit for Paki11 is 100 PKR. You can deposit via JazzCash, Easypaisa, or bank transfer. New users get a welcome bonus of up to 500 PKR on their first deposit.",
      },
    },

    {
      "@type": "Question",
      name: "Is Paki11 APK safe to download?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Paki11 APK is 100% safe. Download only from the official website Paki11apk.info to ensure you get the genuine virus-free version.",
      },
    },
  ],
};

// ==================== 5) BREADCRUMB SCHEMA ====================
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

// ==================== 6) WEBPAGE SCHEMA ====================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Paki11 Game Download APK (Official) Latest Version 2025 | Pakistan",
  description:
    "Download Paki11 Game APK official latest version 2025. Best earning app in Pakistan with slots, card games, live casino and sports betting.",
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@id": `${SITE_URL}/#app`,
  },
  primaryImageOfPage: {
    "@id": `${SITE_URL}/#logo`,
  },
  breadcrumb: {
    "@id": `${SITE_URL}/#breadcrumb`,
  },
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en",
  datePublished: PUBLISHED_DATE,
  dateModified: CURRENT_DATE,
};

// ==================== 7) COMBINED HOMEPAGE SCHEMA ====================
export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    forGraph(organizationSchema),
    forGraph(websiteSchema),
    forGraph(softwareApplicationSchema),
    forGraph(faqSchema),
    forGraph(breadcrumbSchema),
    forGraph(webPageSchema),
  ],
};

// ==================== REACT COMPONENT ====================
export const StructuredData = ({ schema }) => {
  if (!schema) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  );
};

export default StructuredData;
