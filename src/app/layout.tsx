import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/sonner";
import { jaJP } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kit-gimme-scholarship.com"),

  title: "KITクレクレ奨学金",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", rel: "icon", type: "image/svg+xml" },
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
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "KITクレクレ奨学金",
    description:
      "KITクレクレ奨学金は、京都工芸繊維大学の学生を対象とした奨学金を検索できるサイトです。効率良く奨学金を探して時間を有効活用しよう！",
    images: [
      {
        url: "/ogp/image.png",
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
    <ClerkProvider
      //  localization={jaJP}
      localization={{
        ...jaJP,
        userProfile: {
          ...jaJP.userProfile,
          deletePage: {
            title: "アカウントの削除",
            messageLine1: "アカウントを削除してもよろしいですか？",
            messageLine2: "この操作は永久的で取り消すことはできません。",
            actionDescription:
              "続行するには「アカウント削除」と入力してください。",
            confirm: "削除",
          },
        },
      }}
    >
      <html
        lang="ja"
        className={`${notoSansJp.variable} ${notoSerifJp.variable}`}
      >
        <body className="from-background flex min-h-[100svh] w-screen flex-col bg-gradient-to-tl to-white antialiased">
          <Header />
          <main className="mx-auto flex grow">{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
