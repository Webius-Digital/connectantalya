"use client";

import { Instagram, Send, Mail, Phone, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Logo } from "@/components/ui/Logo";
export function Footer() {
    const navT = useTranslations("Navigation");
    const footerT = useTranslations("Footer");
    const year = new Date().getFullYear();
    return (
        <footer className="w-full bg-card border-t border-white/5 pt-20 pb-20 sm:pb-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6 group">
                            <Logo />
                            <span className="text-xl font-bold tracking-tighter">
                                TRAVEL <span className="text-primary tracking-normal font-outfit group-hover:tracking-widest transition-all duration-500">CONNECT</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-sm mb-8">
                            {footerT('description')}
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="p-2 glass rounded-lg hover:text-primary transition-colors">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="p-2 glass rounded-lg hover:text-primary transition-colors">
                                <Send size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-bold font-outfit text-lg">{navT('home')}</h4>
                        <nav className="flex flex-col space-y-3">
                            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">{navT('about')}</Link>
                            <Link href="/participants" className="text-sm text-muted-foreground hover:text-primary transition-colors">{navT('participants')}</Link>
                            <Link href="/program" className="text-sm text-muted-foreground hover:text-primary transition-colors">{navT('program')}</Link>
                            <Link href="/partnership" className="text-sm text-muted-foreground hover:text-primary transition-colors">{navT('partnership')}</Link>
                            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">{navT('contact')}</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">{footerT('orgTitle')}</h4>
                        <div className="space-y-6">
                            <div>
                                <div className="text-xs font-bold text-muted-foreground mb-1 uppercase">MS Tourism</div>
                                <div className="text-sm font-semibold">Murat Durmuş</div>
                                <Link href="tel:+31618999360" className="text-xs opacity-60 hover:text-primary transition-colors">+31 6 18999360</Link>
                                <Link href="mailto:murat@mstourism.nl" className="text-xs opacity-60 hover:text-primary transition-colors">murat@mstourism.nl</Link>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-muted-foreground mb-1 uppercase">LTC Media Group</div>
                                <div className="text-sm font-semibold">Almanya Ofisi</div>
                                <Link href="mailto:info@ltcmedia.de" className="text-xs opacity-60 hover:text-primary transition-colors font-mono">info@ltcmedia.de</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    <div>{footerT('copyright')}</div>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-foreground">{footerT('privacy')}</Link>
                        <Link href="#" className="hover:text-foreground">{footerT('kvkk')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
