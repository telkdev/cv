import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { RESUME_DATA } from "@/data/resume-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.name,
    jobTitle: "Senior Front-end Engineer",
    url: RESUME_DATA.personalWebsiteUrl,
    email: RESUME_DATA.contact.email,
    telephone: RESUME_DATA.contact.tel,
    image: RESUME_DATA.avatarUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Szczecin",
      addressCountry: "PL",
    },
    sameAs: RESUME_DATA.contact.social.map((s) => s.url),
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Nuxt.js",
      "React",
      "Next.js",
      "Node.js",
      "GraphQL",
      "Pinia",
      "Tailwind CSS",
      "Docker",
      "SSR",
      "SSG",
      "Core Web Vitals",
      "Feature-Sliced Design",
      "Micro-frontends",
      "Agentic Development",
      "Claude Code",
      "MCP Servers",
      "AI Agents",
      "Prompt Engineering",
      "CI/CD",
      "WCAG Accessibility",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: RESUME_DATA.education[0].school,
    },
    worksFor: {
      "@type": "Organization",
      name: "Insider",
      url: "https://useinsider.com/",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="canonical" href={RESUME_DATA.personalWebsiteUrl} />
        <JsonLd />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
