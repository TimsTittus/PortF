import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
  twitterCard = 'summary_large_image',
  children
}) => {
  const defaultTitle = 'Tims Tittus - Engineering & CyberSecurity Student';
  const defaultDescription = 'I build secure, efficient solutions, blending coding, design, and cybersecurity skills as a modern polymath.';
  const defaultUrl = 'https://timstittus.vercel.app';
  const defaultImage = `${defaultUrl}/assets/hiddenimage.png`;

  const seoTitle = title ? `${title} | Tims Tittus` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoUrl = canonical || defaultUrl;
  const seoImage = ogImage || defaultImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      {canonical && <link rel="canonical" href={seoUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />

      {children}
    </Helmet>
  );
};

export default SEO;
