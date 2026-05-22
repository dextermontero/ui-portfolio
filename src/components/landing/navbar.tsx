import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navItems = [
        { label: "Home",     href: "#" },
        { label: "About",    href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact",  href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
            {/* Floating pill */}
            <div
                className={`
                    flex items-center gap-1 px-2 py-2 rounded-2xl
                    border border-border/60 backdrop-blur-md
                    transition-all duration-300
                    ${scrolled
                        ? "bg-card/85 shadow-2xl shadow-black/30"
                        : "bg-card/60 shadow-lg shadow-black/20"}
                `}
            >
                {/* Logo */}
                <a
                    href="#"
                    className="mr-1 px-3 py-1.5 rounded-xl text-sm font-bold gradient-text hover:opacity-80 transition-opacity"
                >
                    DM
                </a>

                {/* Divider */}
                <div className="w-px h-4 bg-border/60 mx-1" />

                {/* Desktop nav links */}
                <div className="hidden md:flex items-center gap-0.5">
                    {navItems.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-card/80 transition-all duration-200 cursor-pointer"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-4 bg-border/60 mx-1" />

                {/* Theme toggle */}
                <ThemeToggle />

                {/* CTA */}
                <a
                    href="mailto:dexter.montero09@gmail.com"
                    className="hidden md:inline-flex items-center px-4 py-1.5 rounded-xl bg-primary hover:bg-primary/85 text-primary-foreground text-sm font-medium transition-all duration-200 cursor-pointer"
                >
                    Hire Me
                </a>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-1.5 ml-1 rounded-xl hover:bg-card/80 transition cursor-pointer"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className="absolute top-full mt-2 left-4 right-4 rounded-2xl bg-card/90 backdrop-blur-md border border-border/60 shadow-2xl shadow-black/30 p-2 md:hidden animate-fade-in">
                    {navItems.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-card/80 transition cursor-pointer"
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="mt-2 pt-2 border-t border-border/40">
                        <a
                            href="mailto:dexter.montero09@gmail.com"
                            className="block px-4 py-2.5 text-sm font-medium text-primary hover:text-primary/80 rounded-xl hover:bg-primary/10 transition cursor-pointer"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
