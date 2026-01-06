"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutContent() {
    const t = useTranslations("AboutPage");

    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto"
            >
                {/* Hero Image */}
                <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12">
                    <Image
                        src="/gallery/event-1.jpeg"
                        alt="Travel Connect Antalya Event"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                        <h1 className="text-3xl md:text-5xl font-bold text-white font-outfit">{t('title')}</h1>
                    </div>
                </div>

                <div className="grid gap-12">
                    {/* What Is Section with Image */}
                    <section className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="glass p-8 rounded-3xl">
                            <h2 className="text-2xl font-bold mb-4 text-primary font-outfit">{t('whatIs.title')}</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                {t('whatIs.p1')}
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('whatIs.p2')}
                            </p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden"
                        >
                            <Image
                                src="/gallery/event-2.jpeg"
                                alt="Networking Event"
                                fill
                                className="object-cover"
                                loading="lazy"
                            />
                        </motion.div>
                    </section>

                    {/* Mission & Value with Images */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="relative h-48 rounded-2xl overflow-hidden">
                                <Image
                                    src="/gallery/event-3.jpeg"
                                    alt="Business Meeting"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="glass p-8 rounded-3xl">
                                <h2 className="text-2xl font-bold mb-4 text-primary font-outfit">{t('mission.title')}</h2>
                                <ul className="space-y-4 text-sm text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 shrink-0" />
                                        {t('mission.item1')}
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 shrink-0" />
                                        {t('mission.item2')}
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 shrink-0" />
                                        {t('mission.item3')}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="glass p-8 rounded-3xl border-primary/10">
                                <h2 className="text-2xl font-bold mb-4 text-primary font-outfit">{t('value.title')}</h2>
                                <ul className="space-y-4 text-sm text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 shrink-0" />
                                        <strong>{t('value.item1Title')}</strong> {t('value.item1Desc')}
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 shrink-0" />
                                        <strong>{t('value.item2Title')}</strong> {t('value.item2Desc')}
                                    </li>
                                </ul>
                            </div>
                            <div className="relative h-48 rounded-2xl overflow-hidden">
                                <Image
                                    src="/gallery/event-4.jpeg"
                                    alt="Professional Networking"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
