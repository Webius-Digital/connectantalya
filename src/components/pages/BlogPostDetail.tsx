"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Calendar, Clock, ChevronLeft, Share2, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostDetailProps {
    slug: string;
}

export default function BlogPostDetail({ slug }: PostDetailProps) {
    const t = useTranslations("BlogPage");

    // In a real app, fetch post data based on slug
    const post = {
        title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        date: "2025-12-28",
        readTime: 5,
        category: "Event",
        image: "https://images.unsplash.com/photo-1540339832862-47459980783f?q=80&w=1000&auto=format&fit=crop",
        tags: ["Antalya", "Travel", "B2B", "Networking"]
    };

    return (
        <div className="container mx-auto px-4 py-20 mt-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all mb-12 group"
                >
                    <ChevronLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" />
                    {t('backToBlog')}
                </Link>

                <div className="space-y-6 mb-12">
                    <div className="flex items-center space-x-3">
                        <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">
                            {post.category}
                        </span>
                        <div className="h-px w-8 bg-white/10" />
                        <div className="flex items-center text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                            <Calendar size={12} className="mr-1.5" />
                            {post.date}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black font-outfit tracking-tighter leading-[1.1]">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between py-6 border-y border-white/5">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full instagram-gradient p-[1.5px]">
                                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-black">TC</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-white uppercase tracking-tight">Travel Connect Editorial</div>
                                <div className="text-[10px] text-muted-foreground font-medium">{post.readTime} {t('readingTime')}</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 bg-white/5 hover:bg-white/10 border-white/10">
                                <Share2 size={16} />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-12 relative group shadow-2xl shadow-primary/5">
                    <img src={post.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={post.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="prose prose-invert prose-primary max-w-none text-muted-foreground leading-relaxed text-lg space-y-8">
                    <p className="text-white text-xl font-medium leading-relaxed italic border-l-4 border-primary pl-8 py-2">
                        Travel Connect Antalya 2026, turizm profesyonellerini bir araya getiren en seçkin B2B platformu olmaya hazırlanıyor.
                    </p>

                    <p>
                        Seyahat endüstrisi hızla değişiyor ve bu değişim, daha butik, daha hedef odaklı ve daha kaliteli networking deneyimlerine olan ihtiyacı artırıyor. Travel Connect Antalya, tam da bu noktada devreye giriyor.
                    </p>

                    <h2 className="text-white text-3xl font-bold font-outfit mt-12 mb-6">Pazarın Gizli Gücüyle Bağlantı Kurun</h2>
                    <p>
                        Almanya pazarındaki Rusça konuşan seyahat acenteleri, pazar payının %10'una yakınını temsil ediyor. Ancak bu segment, geleneksel büyük fuarlarda genellikle yeterli ilgiyi görmüyor. Travel Connect, bu özel kitleyi Antalya'nın en lüks otelleriyle buluşturuyor.
                    </p>

                    <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 my-12">
                        <h3 className="text-white text-xl font-bold mb-4 flex items-center">
                            <Tag size={20} className="text-primary mr-3" />
                            İçerik Öne Çıkanlar
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <ArrowRight size={16} className="text-primary mr-3 mt-1 shrink-0" />
                                <span>Birebir garantili randevu sistemleri.</span>
                            </li>
                            <li className="flex items-start">
                                <ArrowRight size={16} className="text-primary mr-3 mt-1 shrink-0" />
                                <span>Özel site inspection turları.</span>
                            </li>
                            <li className="flex items-start">
                                <ArrowRight size={16} className="text-primary mr-3 mt-1 shrink-0" />
                                <span>Premium networking gala geceleri.</span>
                            </li>
                        </ul>
                    </div>

                    <p>
                        Siz de bu seçkin topluluğun bir parçası olmak ve geleceğin iş ortaklıklarını Antalya'da kurmak istiyorsanız, başvurularınızı bekliyoruz.
                    </p>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-3">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-muted-foreground hover:text-white hover:border-primary/40 transition-all cursor-default">
                            #{tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
