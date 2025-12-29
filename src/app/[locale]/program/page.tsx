"use client";

import { motion } from "framer-motion";
import { Coffee, Utensils, Presentation, Camera, Sun, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProgramPage() {
    const t = useTranslations("ProgramPage");

    const schedule = [
        {
            day: t('days.day1'),
            title: t('days.day1Title'),
            events: [
                { time: "14:00", label: t('days.day1Event1'), icon: Coffee },
                { time: "19:00", label: t('days.day1Event2'), icon: Utensils },
            ]
        },
        {
            day: t('days.day2'),
            title: t('days.day2Title'),
            events: [
                { time: "10:00", label: t('days.day2Event1'), icon: Presentation },
                { time: "14:00", label: t('days.day2Event2'), icon: Camera },
                { time: "20:00", label: t('days.day2Event3'), icon: Star },
            ]
        },
        {
            day: t('days.day3'),
            title: t('days.day3Title'),
            events: [
                { time: "09:00", label: t('days.day3Event1'), icon: Presentation },
                { time: "12:00", label: t('days.day3Event2'), icon: Utensils },
                { time: "14:00", label: t('days.day3Event3'), icon: Sun },
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit tracking-tighter">{t('title')}</h1>
                    <p className="text-muted-foreground">{t('subtitle')}</p>
                </div>

                <div className="space-y-12">
                    {schedule.map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="bg-primary text-primary-foreground font-bold px-4 py-1 rounded-full text-sm">
                                    {item.day}
                                </div>
                                <h2 className="text-2xl font-bold">{item.title}</h2>
                            </div>

                            <div className="grid gap-4">
                                {item.events.map((event, eIdx) => (
                                    <div key={eIdx} className="glass p-6 rounded-2xl flex items-center justify-between group transition-all hover:border-primary/30">
                                        <div className="flex items-center space-x-6">
                                            <div className="text-xl font-mono font-bold text-primary/60 group-hover:text-primary transition-colors">
                                                {event.time}
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center">
                                                    <event.icon size={20} className="text-foreground/60" />
                                                </div>
                                                <span className="font-semibold">{event.label}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 glass p-10 rounded-3xl border-primary/20 bg-primary/5">
                    <h3 className="text-2xl font-bold mb-6 font-outfit">{t('whyApril.title')}</h3>
                    <ul className="grid md:grid-cols-3 gap-8">
                        <li className="space-y-2">
                            <div className="font-bold text-primary">{t('whyApril.item1Title')}</div>
                            <p className="text-sm text-muted-foreground">{t('whyApril.item1Desc')}</p>
                        </li>
                        <li className="space-y-2">
                            <div className="font-bold text-primary">{t('whyApril.item2Title')}</div>
                            <p className="text-sm text-muted-foreground">{t('whyApril.item2Desc')}</p>
                        </li>
                        <li className="space-y-2">
                            <div className="font-bold text-primary">{t('whyApril.item3Title')}</div>
                            <p className="text-sm text-muted-foreground">{t('whyApril.item3Desc')}</p>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}
