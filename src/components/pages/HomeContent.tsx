"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { PostFeed } from "@/components/ui/PostFeed";
import { EventGallery } from "@/components/ui/EventGallery";
import { useTranslations } from "next-intl";

// Set to true to show the hero trailer and Instagram video placeholders again.
const SHOW_VIDEO_PLACEHOLDERS = false;

export default function HomeContent() {
    const t = useTranslations("HomePage");

    return (
        <div className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 pt-10 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-5xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-primary/20 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-90 text-primary">
                            {t('heroDate')}
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40 leading-[0.95] font-outfit">
                        {t('heroTitleLine1')} <br />
                        <span className="text-primary italic font-light tracking-normal">{t('heroTitleLine2')}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                        {t('heroDescription')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                        <Button size="lg" className="h-16 px-10 text-lg font-bold group rounded-2xl w-full sm:w-auto shadow-2xl shadow-primary/20">
                            {t('cta_invite')}
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-2xl w-full sm:w-auto border-white/10 hover:bg-white/5 backdrop-blur-sm">
                            {t('cta_partnership')}
                        </Button>
                    </div>
                </motion.div>

                {SHOW_VIDEO_PLACEHOLDERS && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mt-12 relative w-full max-w-6xl h-80 md:h-[500px] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5"
                >
                    <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-700" />
                    <div className="absolute inset-0 instagram-gradient opacity-30 mix-blend-overlay" />
                    <img
                        src="/gallery/event-10.jpeg"
                        alt="Antalya Event"
                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white mb-4"
                        >
                            <PlayCircle size={40} fill="currentColor" />
                        </motion.button>
                        <span className="text-white font-bold tracking-widest text-sm uppercase">Etkinlik Fragmanı</span>
                    </div>
                </motion.div>
                )}
            </section>

            {/* Featured Organizers */}
            <section className="w-full py-20 bg-card/30 border-y border-white/5 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="text-left max-w-md">
                            <h3 className="text-2xl md:text-3xl font-bold font-outfit mb-4">{t('organizers.title')}</h3>
                            <p className="text-muted-foreground text-sm">
                                {t('organizers.description')}
                            </p>
                        </div>
                        <div className="flex items-center gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                            <div className="h-12 w-auto flex items-center justify-center font-black text-3xl tracking-tighter">
                                LTC MEDIA<span className="text-primary italic">GROUP</span>
                            </div>
                            <div className="h-12 w-auto flex items-center justify-center font-black text-3xl tracking-tighter">
                                MS<span className="text-secondary opacity-80">TOURISM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Market Focus Section */}
            <section className="w-full py-24 bg-card/50 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center space-x-2 text-secondary font-bold text-sm tracking-widest uppercase">
                                <span className="w-8 h-[1px] bg-secondary" />
                                <span>{t('marketFocus.badge')}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tighter leading-tight">
                                {t('marketFocus.title1')} <br />
                                <span className="text-secondary italic">{t('marketFocus.title2')}</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {t('marketFocus.description')}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="glass p-6 rounded-2xl border-white/5">
                                    <div className="text-3xl font-bold text-primary mb-1">{t('marketFocus.stat1Value')}</div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t('marketFocus.stat1Label')}</div>
                                </div>
                                <div className="glass p-6 rounded-2xl border-white/5">
                                    <div className="text-3xl font-bold text-primary mb-1">{t('marketFocus.stat2Value')}</div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t('marketFocus.stat2Label')}</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 instagram-gradient opacity-20 z-10" />
                            <img
                                src="/gallery/event-5.jpeg"
                                alt="Networking"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="text-white font-bold text-lg mb-2 italic">{t('marketFocus.imageCaption')}</div>
                                <div className="text-white/60 text-xs tracking-widest uppercase">{t('marketFocus.imageBadge')}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {SHOW_VIDEO_PLACEHOLDERS && (
            <section className="w-full py-24 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit tracking-tighter mb-4">
                        {t('instagram.title')}
                    </h2>
                    <p className="text-muted-foreground">
                        {t('instagram.description')}
                    </p>
                </div>
                <PostFeed />
            </section>
            )}

            {/* Event Gallery Section */}
            <EventGallery limit={6} />

            {/* FAQ Section */}
            <section className="w-full py-24 bg-background">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit tracking-tighter">{t('faq.title')}</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: t('faq.q1'), a: t('faq.a1') },
                            { q: t('faq.q2'), a: t('faq.a2') },
                            { q: t('faq.q3'), a: t('faq.a3') },
                            { q: t('faq.q4'), a: t('faq.a4') }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-6 rounded-2xl border-white/5"
                            >
                                <h4 className="font-bold mb-2 flex items-center justify-between text-lg">
                                    {faq.q}
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {faq.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="w-full py-32 relative overflow-hidden">
                <div className="absolute inset-0 instagram-gradient opacity-10 blur-[100px] -z-10" />
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-outfit tracking-tighter mb-8 italic">
                        {t('finalCta.title')}
                    </h2>
                    <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-2xl shadow-2xl shadow-primary/40">
                        {t('finalCta.button')}
                    </Button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-20 px-4 bg-card border-t border-white/5 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{t('stats.agencies')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{t('stats.partners')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{t('stats.participants')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">5*</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{t('stats.location')}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
