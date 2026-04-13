import type { Metadata } from "next";
import { jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnorlaxDex",
  description: "Pokemon card collection tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-snorlax-body-dark text-snorlax-belly antialiased">
        {children}
      </body>
    </html>
  );
}
