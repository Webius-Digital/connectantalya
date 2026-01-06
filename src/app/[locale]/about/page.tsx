import { getTranslations } from "next-intl/server";
import AboutContent from "@/components/pages/AboutContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('aboutTitle'),
    };
}

export default function AboutPage() {
    return <AboutContent />;
}
