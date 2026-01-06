"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, Trophy, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { PriceCalculator } from "@/components/ui/PriceCalculator";

export default function PartnershipContent() {
    const t = useTranslations("PartnershipPage");

    const packages = [
        {
            name: t('packages.platinum.name'),
            icon: Trophy,
            color: "text-[#E5E4E2]",
            features: [t('packages.platinum.f1'), t('packages.platinum.f2'), t('packages.platinum.f3'), t('packages.platinum.f4')]
        },
        {
            name: t('packages.gold.name'),
            icon: Star,
            color: "text-[#FFD700]",
            features: [t('packages.gold.f1'), t('packages.gold.f2'), t('packages.gold.f3'), t('packages.gold.f4')]
        },
        {
            name: t('packages.silver.name'),
            icon: Star,
            color: "text-[#C0C0C0]",
            features: [t('packages.silver.f1'), t('packages.silver.f2'), t('packages.silver.f3'), t('packages.silver.f4')]
        },
        {
            name: t('packages.bronze.name'),
            icon: Briefcase,
            color: "text-[#CD7F32]",
            features: [t('packages.bronze.f1'), t('packages.bronze.f2'), t('packages.bronze.f3')]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit tracking-tighter">{t('title')}</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {packages.map((pkg) => (
                        <div key={pkg.name} className="glass p-8 rounded-3xl border-white/5 transition-transform hover:-translate-y-2">
                            <pkg.icon className={cn("mb-6", pkg.color)} size={40} />
                            <h3 className="text-xl font-bold mb-6">{pkg.name}</h3>
                            <ul className="space-y-4">
                                {pkg.features.map((feature) => (
                                    <li key={feature} className="flex items-start text-xs text-muted-foreground leading-tight">
                                        <CheckCircle2 size={14} className="text-primary mr-2 shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mb-20">
                    <PriceCalculator />
                </div>

                <div className="glass p-10 rounded-3xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
                    <h2 className="text-2xl font-bold mb-8 font-outfit">{t('org.title')}</h2>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-4">
                            <p className="text-muted-foreground">
                                {t('org.description')}
                            </p>
                            <div className="flex items-center space-x-12">
                                <Logo type="ltc" />
                                <Logo type="ms" />
                            </div>
                        </div>
                        <div className="shrink-0">
                            <Button size="lg" className="rounded-2xl font-bold h-14 px-10">
                                {t('org.button')}
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
