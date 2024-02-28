import type { Metadata } from "next";
import "./globals.css";
import { monsieur_la_doulaise } from "./fonts";

export const metadata: Metadata = {
  title: "Chuck and Samantha's Wedding Website",
  description: "Chuck and Samantha's Wedding Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monsieur_la_doulaise.className}>{children}</body>
    </html>
  );
}
