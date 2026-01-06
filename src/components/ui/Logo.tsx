"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    variant?: "default" | "organizer";
    type?: "tc" | "ms" | "ltc";
}

export function Logo({ className, variant = "default", type = "tc" }: LogoProps) {
    if (type === "tc") {
        return (
            <div className={cn("flex items-center", className)}>
                <Image
                    src="/ConnectAntalya_Amblem.png"
                    alt="Connect Antalya Logo"
                    width={44}
                    height={44}
                    className="object-contain"
                    priority
                />
            </div>
        );
    }

    if (type === "ms") {
        return (
            <div className={cn("flex flex-col items-center", className)}>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 overflow-hidden group hover:border-primary/50 transition-colors dark:bg-white/5 dark:border-white/10">
                    <Image
                        src="/MS_Tourism_Logo.png"
                        alt="MS Tourism Logo"
                        width={48}
                        height={48}
                        className="object-contain group-hover:scale-110 transition-transform"
                    />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">MS Tourism</div>
            </div>
        );
    }

    if (type === "ltc") {
        return (
            <div className={cn("flex flex-col items-center", className)}>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 overflow-hidden group hover:border-primary/50 transition-colors dark:bg-white/5 dark:border-white/10">
                    <Image
                        src="/Media _Group_Logo.png"
                        alt="LTC Media Group Logo"
                        width={48}
                        height={48}
                        className="object-contain group-hover:scale-110 transition-transform"
                    />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">LTC Media</div>
            </div>
        );
    }

    return null;
}
