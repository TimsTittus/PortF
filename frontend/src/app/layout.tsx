import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Layout from "@/components/layout/Layout";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tims Tittus | CyberSecurity Student & Polymath",
  description:
    "Portfolio of Tims Tittus, an Engineering, CyberSecurity student and polymath. Projects, skills, and contact.",
  authors: [{ name: "Tims Tittus" }],
  openGraph: {
    title: "Tims Tittus",
    description: "Portfolio",
    type: "website",
    url: "https://timstittus.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tims Tittus",
    "jobTitle": ["CyberSecurity Student", "Engineer", "Polymath"],
    "url": "https://timstittus.vercel.app",
    "sameAs": [
      "https://github.com/timstittus",
      "https://www.linkedin.com/in/tims-tittus"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <Script src="https://cdn.gpteng.co/gptengineer.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}