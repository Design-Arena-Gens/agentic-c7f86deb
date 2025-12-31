import type { Metadata } from "next";
import "./globals.css";
import { hindSiliguri } from "./theme";

export const metadata: Metadata = {
  title: "ওয়েবসাইট পাবলিশ গাইড | Publish Your Website",
  description: "ধাপে ধাপে নির্দেশিকা যাতে যে কেউ তার ওয়েবসাইট ইন্টারনেটে পাবলিশ করতে পারে।"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={hindSiliguri.className}>
      <body>{children}</body>
    </html>
  );
}
