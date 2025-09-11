interface StructuredDataProps {
  type?: 'website' | 'travel-agency' | 'organization';
  data?: Record<string, any>;
}

export function StructuredData({ type = 'travel-agency', data = {} }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'travel-agency' ? "TravelAgency" : type === 'organization' ? "Organization" : "WebSite",
      "name": "Roundtrip Adventure",
      "description": "Discover amazing travel experiences with Roundtrip Adventure. Explore mountains, oceans, and deserts with our curated adventure packages.",
      "url": window.location.origin,
      ...data
    };

    if (type === 'travel-agency') {
      return {
        ...baseData,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Adventure Travel Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "TravelPackage",
                "name": "Mountain Escape",
                "description": "Experience breathtaking peaks and pristine wilderness"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "TravelPackage",
                "name": "Ocean Adventure",
                "description": "Dive into crystal clear waters and explore vibrant marine life"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "TravelPackage", 
                "name": "Desert Journey",
                "description": "Discover ancient landscapes and mystique of golden dunes"
              }
            }
          ]
        }
      };
    }

    return baseData;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  );
}