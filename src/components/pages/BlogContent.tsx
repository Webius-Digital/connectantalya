"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Calendar, Clock, ChevronRight, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

const mockPosts = [
    {
        slug: "travel-connect-antalya-2026-announcement",
        title: "Travel Connect Antalya 2026: Sektörün Yeni Buluşma Noktası",
        excerpt: "Antalya'nın kalbinde gerçekleşecek olan bu özel B2B etkinliğinin detayları ve hedefleri.",
        date: "2025-12-28",
        readTime: 5,
        image: "https://images.unsplash.com/photo-1540339832862-47459980783f?q=80&w=1000&auto=format&fit=crop",
        category: "Event"
    },
    {
        slug: "b2b-networking-tips-for-travel-professionals",
        title: "Seyahat Profesyonelleri İçin Etkili Networking İpuçları",
        excerpt: "Butik etkinliklerde doğru bağlantıları kurmanın ve sürdürülebilir iş ortaklıkları geliştirmenin yolları.",
        date: "2025-12-25",
        readTime: 4,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        category: "Tips"
    },
    {
        slug: "german-russian-speaking-market-insights",
        title: "Almanya'daki Rusça Konuşan Seyahat Pazarı Analizi",
        excerpt: "Pazarın %10'unu temsil eden bu segmentin potansiyeli ve Antalya destinasyonu için önemi.",
        date: "2025-12-20",
        readTime: 6,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop",
        category: "Market Report"
    }
];

export default function BlogContent() {
    const t = useTranslations("BlogPage");

    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                        <Newspaper size={14} />
                        <span>TRAVEL CONNECT NEWS</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit tracking-tighter">{t('title')}</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden hover:border-primary/30 transition-all group flex flex-col h-full"
                        >
                            <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden block">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/10">
                                        {post.category}
                                    </span>
                                </div>
                            </Link>

                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center space-x-4 text-[11px] text-muted-foreground font-bold uppercase tracking-widest mb-4">
                                    <div className="flex items-center">
                                        <Calendar size={12} className="mr-1.5" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock size={12} className="mr-1.5" />
                                        {post.readTime} {t('readingTime')}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-sm text-muted-foreground line-clamp-3 mb-8 flex-1 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-colors"
                                >
                                    {t('readMore')}
                                    <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
