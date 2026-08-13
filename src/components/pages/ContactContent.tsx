"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, Send, MessageCircle, Instagram, Send as Telegram } from "lucide-react";
import { useTranslations } from "next-intl";

import { useState } from "react";

export default function ContactContent() {
    const t = useTranslations("ContactPage");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                alert(t('form.success'));
                (e.target as HTMLFormElement).reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 font-outfit tracking-tighter">{t('title')}</h1>
                    <p className="text-muted-foreground text-lg mb-12">
                        {t('description')}
                    </p>

                    <div className="space-y-8 mb-16">
                        <div className="flex items-center space-x-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                <Phone size={24} className="text-primary" />
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground font-bold uppercase tracking-widest mb-1">{t('info.phone')}</div>
                                <div className="text-xl font-bold">Murat Durmuş</div>
                                <a href="tel:+31618999360" className="text-lg opacity-80 hover:text-primary transition-colors tracking-tight font-mono">+31 6 18999360</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                <Mail size={24} className="text-primary" />
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground font-bold uppercase tracking-widest mb-1">{t('info.email')}</div>
                                <a href="mailto:info@connectantalya.com" className="text-xl font-bold hover:text-primary transition-colors">info@connectantalya.com</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                <Globe size={24} className="text-primary" />
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground font-bold uppercase tracking-widest mb-1">{t('info.website')}</div>
                                <div className="text-xl font-bold">www.connectantalya.com</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="w-12 h-12 rounded-xl">
                            <Instagram size={20} />
                        </Button>
                        <Button variant="outline" size="icon" className="w-12 h-12 rounded-xl">
                            <MessageCircle size={20} />
                        </Button>
                        <Button variant="outline" size="icon" className="w-12 h-12 rounded-xl">
                            <Telegram size={20} />
                        </Button>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass p-10 rounded-[2.5rem] border-white/5"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">{t('form.typeLabel')}</label>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { key: 'agency', label: t('form.types.agency') },
                                    { key: 'hotel', label: t('form.types.hotel') },
                                    { key: 'operator', label: t('form.types.operator') }
                                ].map((type) => (
                                    <label key={type.key} className="relative cursor-pointer group">
                                        <input type="radio" name="user_type" value={type.key} className="peer absolute opacity-0" defaultChecked={type.key === "agency"} />
                                        <div className="p-4 text-center rounded-2xl border border-white/10 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-primary-foreground transition-all font-bold text-sm bg-white/5 hover:bg-white/10">
                                            {type.label}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2 text-primary">
                                <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1 text-foreground">{t('form.nameLabel')}</label>
                                <input required type="text" placeholder="John Doe" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:border-primary transition-colors font-medium" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">{t('form.companyLabel')}</label>
                                <input required type="text" placeholder="Travel Co." className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:border-primary transition-colors font-medium" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">{t('form.emailLabel')}</label>
                                <input required type="email" placeholder="john@example.com" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:border-primary transition-colors font-medium" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">{t('form.phoneLabel')}</label>
                                <input required type="tel" placeholder="+90 ..." className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:border-primary transition-colors font-medium" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">{t('form.messageLabel')}</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 outline-none focus:border-primary transition-colors font-medium resize-none" placeholder={t('form.messagePlaceholder')} />
                        </div>

                        <Button
                            disabled={isSubmitting}
                            className="w-full h-16 rounded-2xl font-bold text-lg group shadow-xl shadow-primary/20"
                        >
                            {isSubmitting ? "..." : t('form.submit')}
                            <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
