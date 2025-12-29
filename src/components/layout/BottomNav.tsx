"use client";

import { Home, Compass, FileText, Search, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { motion } from "framer-motion";

const navItems = [
    { icon: Home, labelKey: "home", href: "/" },
    { icon: Compass, labelKey: "program", href: "/program" },
    { icon: FileText, labelKey: "contact", href: "/contact" },
    { icon: Search, labelKey: "participants", href: "/participants" },
    { icon: Building2, labelKey: "about", href: "/about" },
];

export function BottomNav() {
    const pathname = usePathname();
    const t = useTranslations("Navigation");

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 glass sm:hidden pb-safe">
            <div className="flex items-center justify-around h-16">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href as any}
                            className={cn(
                                "flex flex-col items-center justify-center space-y-1 w-full transition-colors",
                                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <div className="relative">
                                <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-dot"
                                        className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-primary rounded-full"
                                    />
                                )}
                            </div>
                            <span className="text-[10px] font-medium uppercase tracking-tighter">
                                {t(item.labelKey)}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
