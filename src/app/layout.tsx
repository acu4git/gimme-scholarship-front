import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "KITクレクレ奨学金",
  description: "奨学金一覧を閲覧可能．また，更新情報をメール通知．",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ja">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
