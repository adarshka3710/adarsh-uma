import type { Metadata, Viewport } from "next";
import { Gloock, Hanken_Grotesk, Kalam } from "next/font/google";
import "./globals.css";

const display = Gloock({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const handwriting = Kalam({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "5 Years of Adarsh & Uma",
  description:
    "Five years of memories, laughter, distance, and one love—made by Adarsh for Uma.",
  applicationName: "Adarsh × Uma",
  keywords: ["Adarsh", "Uma", "anniversary", "five years", "love story"],
  openGraph: {
    title: "5 Years of Us — Adarsh × Uma",
    description: "A little corner of the internet where our five years live.",
    type: "website",
    locale: "en_IN",
    siteName: "Adarsh × Uma",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Years of Us — Adarsh × Uma",
    description: "23 September. Five years down, forever to go.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#240d16",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${handwriting.variable}`}
    >
      <body>
        <span
          hidden
          data-design-contract="anniversary-five-frames"
          dangerouslySetInnerHTML={{
            __html:
              "THESIS: A five-frame after-hours memory cinema, refusing the generic anniversary card stack. OWN-WORLD: Midnight wine, blush dusk, aged champagne, film perforations, tactile photographs, and handwritten marginalia. STORY: Uma opens a private gift, travels through five years of tenderness and chaos, and reaches Adarsh's still-choosing-you promise. FIRST VIEWPORT: A dark cinema title card with staggered copy, one intimate envelope action, and film-light atmosphere. FORM: Approved memory-cinema direction, seed key anniversary-five-frames. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md",
          }}
        />
        {children}
      </body>
    </html>
  );
}
