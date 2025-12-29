"use client";

import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
    { labelKey: "home", href: "/" },
    { labelKey: "about", href: "/about" },
    { labelKey: "participants", href: "/participants" },
    { labelKey: "program", href: "/program" },
    { labelKey: "partnership", href: "/partnership" },
    { labelKey: "contact", href: "/contact" },
];

export function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("Navigation");
    const [isLangOpen, setIsLangOpen] = useState(false);

    const toggleLanguage = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
        setIsLangOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-xl instagram-gradient animate-pulse" />
                        <span className="text-xl font-bold tracking-tighter">
                            TRAVEL <span className="text-primary tracking-normal">CONNECT</span>
                        </span>
                    </Link>

                    <nav className="hidden sm:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href as any}
                                className={cn(
                                    "text-sm font-semibold transition-colors hover:text-primary",
                                    pathname === item.href ? "text-primary" : "text-foreground/80"
                                )}
                            >
                                {t(item.labelKey)}
                            </Link>
                        ))}
                        <div className="relative group">
                            <button
                                className="flex items-center space-x-2 text-xs font-bold hover:text-primary transition-colors uppercase"
                                onClick={() => setIsLangOpen(!isLangOpen)}
                            >
                                <Globe size={14} />
                                <span>{locale}</span>
                                <ChevronDown size={10} className={cn("transition-transform", isLangOpen && "rotate-180")} />
                            </button>

                            {isLangOpen && (
                                <div className="absolute top-full right-0 mt-2 w-24 glass border-white/10 rounded-xl overflow-hidden shadow-2xl z-[60]">
                                    {['tr', 'en', 'ru', 'de'].map((l) => (
                                        <button
                                            key={l}
                                            onClick={() => toggleLanguage(l)}
                                            className={cn(
                                                "w-full px-4 py-2 text-xs font-bold text-left hover:bg-white/5 transition-colors uppercase",
                                                locale === l ? "text-primary bg-white/5" : "text-foreground"
                                            )}
                                        >
                                            {l}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Button size="sm" className="font-bold rounded-xl h-10 px-6">
                            {t("requestInvitation")}
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
