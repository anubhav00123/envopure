"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Envopure",
    "image": "https://www.envopure.in/images/logo.jpeg",
    "@id": "https://www.envopure.in",
    "url": "https://www.envopure.in",
    "telephone": "+91-9318397840",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5355,
      "longitude": 77.3910
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/envopure",
      "https://www.instagram.com/envopure",
      "https://twitter.com/envopure"
    ],
    "description": "Professional pest control services in Noida NCR. Expert termite treatment, rodent control, cockroach control, bed bug treatment & mosquito control. Affordable & eco-friendly pest management solutions.",
    "areaServed": {
      "@type": "City",
      "name": "Noida"
    },
    "serviceType": [
      "Pest Control Services",
      "Termite Treatment",
      "Rodent Control",
      "Cockroach Control",
      "Bed Bug Treatment",
      "Mosquito Control",
      "Commercial Pest Control",
      "Residential Pest Control"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
