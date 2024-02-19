import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Javier A. Garcia",
  description:
    "I'm an entrepreneur and a full stack software engineer, passionate about leveraging technology to build solutions that people love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
