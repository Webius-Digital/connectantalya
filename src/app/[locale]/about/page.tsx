"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations("AboutPage");

    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-8">{t('title')}</h1>

                <div className="grid gap-12">
                    <section className="glass p-8 rounded-3xl">
                        <h2 className="text-2xl font-bold mb-4 text-primary font-outfit">{t('whatIs.title')}</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            {t('whatIs.p1')}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            {t('whatIs.p2')}
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
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
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
