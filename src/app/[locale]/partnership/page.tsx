import { getTranslations } from "next-intl/server";
import PartnershipContent from "@/components/pages/PartnershipContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('partnershipTitle'),
    };
}

export default function PartnershipPage() {
    return <PartnershipContent />;
}
