export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ágil Serviços BR",
    "image": "https://agilservicosbr.com.br/logo.png",
    "@id": "",
    "url": "https://agilservicosbr.com.br",
    "telephone": "+5511999999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua das Inovações, 1000",
      "addressLocality": "São Paulo",
      "postalCode": "04551-060",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.595,
      "longitude": -46.685
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/agilservicosbr",
      "https://www.instagram.com/agilservicosbr",
      "https://www.linkedin.com/company/agilservicosbr"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
