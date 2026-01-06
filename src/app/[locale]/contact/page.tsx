import { getTranslations } from "next-intl/server";
import ContactContent from "@/components/pages/ContactContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('contactTitle'),
    };
}

export default function ContactPage() {
    return <ContactContent />;
}
