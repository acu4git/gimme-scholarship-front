import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { jaJP } from "@clerk/localizations";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://kit-gimme-scholarship.com"),

  title: "KITクレクレ奨学金",
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "icon", type: "image/x-icon" },
      {
        url: "/favicon-16x16.png",
        rel: "icon",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", rel: "apple-touch-icon" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "KITクレクレ奨学金",
    description:
      "KITクレクレ奨学金は、京都工芸繊維大学の学生を対象とした奨学金を検索できるサイトです。効率良く奨学金を探して時間を有効活用しよう！",
    images: [
      {
        url: "/ogp/image.svg",
        width: 500,
        height: 500,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={jaJP}>
      <html lang="ja">
        <body>
          <Header />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
