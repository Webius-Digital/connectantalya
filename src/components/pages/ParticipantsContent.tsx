"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Building2, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ParticipantsContent() {
    const t = useTranslations("ParticipantsPage");

    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto"
            >
                {/* Hero Section with Image Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">{t('title')}</h1>
                        <p className="text-muted-foreground text-lg">
                            {t('total.quote')}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="relative aspect-square rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="/gallery/event-5.jpeg"
                                alt="Participants networking"
                                fill
                                className="object-cover"
                                loading="lazy"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-square rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="/gallery/event-6.jpeg"
                                alt="Business meeting"
                                fill
                                className="object-cover"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Agencies Card */}
                    <div className="glass p-10 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:scale-110 transition-transform">
                            <Users size={120} />
                        </div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                                <Users size={18} className="text-primary" />
                            </span>
                            {t('agencies.title')}
                        </h2>
                        <div className="text-4xl font-bold mb-4 font-outfit">{t('agencies.count')}</div>
                        <p className="text-muted-foreground font-medium mb-6">{t('agencies.label')}</p>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• {t('agencies.item1')}</li>
                            <li>• {t('agencies.item2')}</li>
                        </ul>
                    </div>

                    {/* Partners Card */}
                    <div className="glass p-10 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-secondary/10 group-hover:scale-110 transition-transform">
                            <Building2 size={120} />
                        </div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center mr-3">
                                <Building2 size={18} className="text-secondary" />
                            </span>
                            {t('partners.title')}
                        </h2>
                        <div className="text-4xl font-bold mb-4 font-outfit">{t('partners.count')}</div>
                        <p className="text-muted-foreground font-medium mb-6">{t('partners.label')}</p>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• {t('partners.item1')}</li>
                            <li>• {t('partners.item2')}</li>
                            <li>• {t('partners.item3')}</li>
                        </ul>
                    </div>
                </div>

                {/* Image Gallery Strip */}
                <div className="grid grid-cols-3 gap-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="/gallery/event-7.jpeg"
                            alt="Conference attendees"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative aspect-video rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="/gallery/event-8.jpeg"
                            alt="Panel discussion"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative aspect-video rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="/gallery/event-9.jpeg"
                            alt="Networking session"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* Total Section */}
                <div className="glass p-12 rounded-3xl border-primary/5 text-center">
                    <div className="inline-flex items-center space-x-2 text-primary font-bold text-xl mb-4">
                        <Globe size={24} />
                        <span>{t('total.label')}</span>
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto italic">
                        {t('total.quote')}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
