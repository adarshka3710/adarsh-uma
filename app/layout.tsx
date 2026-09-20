import type { Metadata, Viewport } from "next";
import { Gloock, Hanken_Grotesk, Kalam } from "next/font/google";
import { names, site } from "@/data/relationship";
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
  title: site.title,
  description: site.description,
  applicationName: site.coupleLabel,
  keywords: [names.him, names.her, "anniversary", "five years", "love story"],
  openGraph: {
    title: `${site.shortTitle} — ${site.coupleLabel}`,
    description: site.ogDescription,
    type: "website",
    locale: "en_IN",
    siteName: site.coupleLabel,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortTitle} — ${site.coupleLabel}`,
    description: site.twitterDescription,
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
            __html: `THESIS: A five-frame after-hours memory cinema, refusing the generic anniversary card stack. OWN-WORLD: Midnight wine, blush dusk, aged champagne, film perforations, tactile photographs, and handwritten marginalia. STORY: ${names.her} opens a private gift, travels through five years of tenderness and chaos, and reaches ${names.him}'s still-choosing-you promise. FIRST VIEWPORT: A dark cinema title card with staggered copy, one intimate envelope action, and film-light atmosphere. FORM: Approved memory-cinema direction, seed key anniversary-five-frames. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
