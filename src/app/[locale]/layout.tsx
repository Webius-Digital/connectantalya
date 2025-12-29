import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Travel Connect Antalya | Sektörün Bağlantı Noktası",
  description: "Seyahat Endüstrisi Profesyonelleri İçin Seçkin B2B Etkinliği. 16-19 Nisan 2026, Antalya/Belek.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-inter antialiased overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="min-h-screen pt-20 pb-20 sm:pb-0">
            {children}
          </main>
          <Footer />
          <BottomNav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
