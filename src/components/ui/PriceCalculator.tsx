"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, ChevronRight, Calculator, Users, Maximize2, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const packages = [
    { id: "platinum", price: 5000 },
    { id: "gold", price: 3000 },
    { id: "silver", price: 1500 },
    { id: "bronze", price: 800 },
];

export function PriceCalculator() {
    const t = useTranslations("PartnershipPage.calculator");
    const pkgT = useTranslations("PartnershipPage.packages");

    const [selectedPkg, setSelectedPkg] = useState(packages[0].id);
    const [standSize, setStandSize] = useState(6); // m2
    const [reps, setReps] = useState(2);

    const basePrice = useMemo(() => {
        return packages.find(p => p.id === selectedPkg)?.price || 0;
    }, [selectedPkg]);

    const standPrice = useMemo(() => {
        // Assume 150 EUR per extra m2 above 6m2 if applicable, 
        // or just a base addition for simplicity.
        return Math.max(0, standSize - 4) * 120;
    }, [standSize]);

    const repPrice = useMemo(() => {
        // Assume 2 reps included, extra reps 100 EUR each
        return Math.max(0, reps - 2) * 150;
    }, [reps]);

    const total = basePrice + standPrice + repPrice;

    return (
        <div className="w-full max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />

            <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Calculator className="text-primary" size={24} />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-outfit">{t('title')}</h2>
                    <p className="text-muted-foreground text-sm">{t('description')}</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-10">
                    {/* Package Selection */}
                    <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-60 flex items-center">
                            <Package size={14} className="mr-2" />
                            {t('packageLabel')}
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {packages.map((pkg) => (
                                <button
                                    key={pkg.id}
                                    onClick={() => setSelectedPkg(pkg.id)}
                                    className={cn(
                                        "p-4 rounded-2xl border text-left transition-all relative overflow-hidden group",
                                        selectedPkg === pkg.id
                                            ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                                            : "bg-white/5 border-white/10 hover:border-white/20"
                                    )}
                                >
                                    <div className="font-bold text-sm mb-1">{pkgT(`${pkg.id}.name`)}</div>
                                    <div className={cn(
                                        "text-xs opacity-70",
                                        selectedPkg === pkg.id ? "text-white" : "text-muted-foreground"
                                    )}>
                                        {t('currency')}{pkg.price}+
                                    </div>
                                    {selectedPkg === pkg.id && (
                                        <div className="absolute top-2 right-2">
                                            <Check size={14} />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stand Size */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <label className="text-xs font-bold uppercase tracking-widest opacity-60 flex items-center">
                                <Maximize2 size={14} className="mr-2" />
                                {t('standLabel')}
                            </label>
                            <span className="text-primary font-bold">{standSize} m²</span>
                        </div>
                        <input
                            type="range"
                            min="4"
                            max="24"
                            step="2"
                            value={standSize}
                            onChange={(e) => setStandSize(parseInt(e.target.value))}
                            className="w-full accent-primary h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] opacity-40 font-bold uppercase tracking-tighter">
                            <span>4m²</span>
                            <span>12m²</span>
                            <span>24m²</span>
                        </div>
                    </div>

                    {/* Reps */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <label className="text-xs font-bold uppercase tracking-widest opacity-60 flex items-center">
                                <Users size={14} className="mr-2" />
                                {t('repLabel')}
                            </label>
                            <span className="text-primary font-bold">{reps}</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={reps}
                            onChange={(e) => setReps(parseInt(e.target.value))}
                            className="w-full accent-primary h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] opacity-40 font-bold uppercase tracking-tighter">
                            <span>1</span>
                            <span>5</span>
                            <span>10</span>
                        </div>
                    </div>
                </div>

                {/* Result Column */}
                <div className="relative">
                    <div className="sticky top-0 h-full flex flex-col justify-center">
                        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center relative overflow-hidden">
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 blur-[60px] rounded-full animate-pulse" />

                            <div className="relative z-10">
                                <div className="text-sm font-bold opacity-60 uppercase mb-2 tracking-widest">
                                    {t('totalLabel')}
                                </div>
                                <motion.div
                                    key={total}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-6xl md:text-7xl font-black font-outfit text-white mb-2"
                                >
                                    {t('currency')}{total}
                                </motion.div>
                                <p className="text-xs text-muted-foreground italic max-w-[200px] mx-auto leading-relaxed">
                                    {t('disclaimer')}
                                </p>

                                <Button className="w-full mt-10 h-14 rounded-2xl font-bold group">
                                    {useTranslations("HomePage")('cta_invite')}
                                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
