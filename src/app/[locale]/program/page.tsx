import { getTranslations } from "next-intl/server";
import ProgramContent from "@/components/pages/ProgramContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('programTitle'),
    };
}

export default function ProgramPage() {
    return <ProgramContent />;
}
