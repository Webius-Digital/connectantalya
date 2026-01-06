import { getTranslations } from "next-intl/server";
import ParticipantsContent from "@/components/pages/ParticipantsContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('participantsTitle'),
    };
}

export default function ParticipantsPage() {
    return <ParticipantsContent />;
}
