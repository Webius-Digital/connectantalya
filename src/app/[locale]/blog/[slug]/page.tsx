import { getTranslations } from "next-intl/server";
import BlogPostDetail from "@/components/pages/BlogPostDetail";

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string, slug: string } }) {
    const t = await getTranslations({ locale, namespace: "Metadata" });
    const postTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return {
        title: `${postTitle} | Travel Connect Antalya`,
        description: t("description"),
    };
}

export default function BlogPostPage({ params: { slug } }: { params: { slug: string } }) {
    return <BlogPostDetail slug={slug} />;
}
