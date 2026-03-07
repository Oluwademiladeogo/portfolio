import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Demilade Bickersteth",
  description:
    "AI Engineer building voice agents, speech models, and autonomous systems.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Voice AI",
    "Speech Recognition",
    "Demilade Bickersteth",
  ],
  authors: [{ name: "Demilade Bickersteth" }],
  openGraph: {
    title: "Demilade Bickersteth",
    description:
      "AI Engineer building voice agents, speech models, and autonomous systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Demilade Bickersteth",
    description: "Building AI systems that work in the real world.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-neutral-950 font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
