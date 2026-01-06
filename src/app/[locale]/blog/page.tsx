import { getTranslations } from "next-intl/server";
import BlogContent from "@/components/pages/BlogContent";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "Metadata" });
    return {
        title: t("blogTitle"),
        description: t("description"),
    };
}

export default function BlogPage() {
    return <BlogContent />;
}
