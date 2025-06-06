import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { jaJP } from "@clerk/localizations";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/sonner";

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
