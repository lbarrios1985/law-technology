import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Law Technology - Consultorio Jurídico',
  description = 'Somos un equipo de abogados especializados en ofrecer soluciones legales efectivas. Brindamos asesoría en propiedad intelectual, civil, mercantil, penal y laboral.',
  keywords = 'abogados, derecho, propiedad intelectual, civil, mercantil, penal, laboral, asesoría legal, Mérida, Venezuela',
  image = '/Law-Technology.png',
  url = 'https://law-technology.com',
}) => {
  const siteUrl = url;
  const siteImage = `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Metadatos básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteImage} />

      {/* Metadatos adicionales */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="Law Technology" />
      <meta name="geo.region" content="VE-L" />
      <meta name="geo.placename" content="Mérida" />
      <meta name="geo.position" content="8.598333;-71.145833" />
      <meta name="ICBM" content="8.598333, -71.145833" />

      {/* Verificación de propiedad del sitio */}
      <meta name="google-site-verification" content="your-verification-code" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
    </Helmet>
  );
};

export default SEO;
