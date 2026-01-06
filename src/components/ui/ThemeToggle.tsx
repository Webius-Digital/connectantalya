"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
            >
                <div className="w-4 h-4" />
            </button>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn(
                "relative p-2 rounded-xl transition-all duration-300",
                "bg-white/5 hover:bg-white/10",
                "dark:bg-white/5 dark:hover:bg-white/10"
            )}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <div className="relative w-4 h-4">
                <Sun
                    size={16}
                    className={cn(
                        "absolute inset-0 transition-all duration-300",
                        isDark
                            ? "opacity-0 rotate-90 scale-0"
                            : "opacity-100 rotate-0 scale-100"
                    )}
                />
                <Moon
                    size={16}
                    className={cn(
                        "absolute inset-0 transition-all duration-300",
                        isDark
                            ? "opacity-100 rotate-0 scale-100"
                            : "opacity-0 -rotate-90 scale-0"
                    )}
                />
            </div>
        </button>
    );
}
