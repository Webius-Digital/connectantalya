import { getTranslations } from "next-intl/server";
import HomeContent from "@/components/pages/HomeContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HomePage() {
  return <HomeContent />;
}
