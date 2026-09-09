import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paul Caucheteux · PhD student at CREST",
  description: "Paul Caucheteux, PhD student in statistics at CREST / ENSAE Paris. Research on generative modeling, optimization and Wasserstein gradient flows. Publications, presentations and teaching.",
  icons: { icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22/>" },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
