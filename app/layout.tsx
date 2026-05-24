import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Treats By Tayjah | Custom Cakes, Cupcakes and Cookies in Manchester",
  description:
    "Treats By Tayjah creates beautifully finished custom treats from Manchester M14 for birthdays, gifts, events and the little moments worth celebrating.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
