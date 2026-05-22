import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { setTheme } = useTheme();
    // Local state drives the icon — updates instantly, independent of next-themes' async cycle
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9 rounded-xl" aria-hidden="true" />;
    }

    const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        const goingDark = !isDark;
        const nextTheme = goingDark ? "dark" : "light";
        const root = document.documentElement;

        // Flip icon immediately — no waiting for React/next-themes
        setIsDark(goingDark);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const vt = (document as any).startViewTransition as
            | ((fn: () => void) => { finished: Promise<void> })
            | undefined;

        const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

        if (!vt || isTouchDevice) {
            // Touch devices: skip View Transition — bitmap capture is too slow on mobile
            root.classList.toggle("dark", goingDark);
            try { localStorage.setItem("theme", nextTheme); } catch { /* ignore */ }
            setTheme(nextTheme);
            return;
        }

        root.style.setProperty("--theme-x", `${e.clientX}px`);
        root.style.setProperty("--theme-y", `${e.clientY}px`);

        // Freeze element-level CSS transitions so they don't fight the circle animation
        root.setAttribute("data-theme-transition", "");

        const transition = vt.call(document, () => {
            // Pure synchronous DOM ops only — no React, no flushSync, no useEffect
            // VT takes its "after" screenshot HERE, so class must change inside this callback
            root.classList.toggle("dark", goingDark);
            try { localStorage.setItem("theme", nextTheme); } catch { /* ignore */ }
        });

        transition.finished.finally(() => {
            // Unfreeze element transitions
            root.removeAttribute("data-theme-transition");
            // Sync React / next-themes state after animation so the rest of the app is consistent
            setTheme(nextTheme);
        });
    };

    return (
        <button
            onClick={toggle}
            className="relative w-9 h-9 rounded-xl bg-card/60 border border-border/60
                       flex items-center justify-center text-muted-foreground
                       hover:text-accent hover:border-accent/40 hover:bg-accent/10
                       transition-all duration-200 cursor-pointer overflow-hidden"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {/* Sun — shown in dark mode */}
            <Sun
                className={`absolute w-4 h-4 transition-all duration-250 ease-out
                            ${isDark
                                ? "opacity-100 rotate-0 scale-100"
                                : "opacity-0 rotate-90 scale-50 pointer-events-none"
                            }`}
            />
            {/* Moon — shown in light mode */}
            <Moon
                className={`absolute w-4 h-4 transition-all duration-250 ease-out
                            ${!isDark
                                ? "opacity-100 rotate-0 scale-100"
                                : "opacity-0 -rotate-90 scale-50 pointer-events-none"
                            }`}
            />
        </button>
    );
}
