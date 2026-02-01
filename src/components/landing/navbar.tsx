import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/30 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    >
                        DM
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-card/50 transition duration-200"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <a
                            href="mailto:dexter.montero09@gmail.com"
                            className="px-4 py-2 bg-primary hover:bg-primary-dark text-foreground rounded-lg transition duration-200"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 hover:bg-card/50 rounded-lg transition"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden bg-card/50 border-t border-border py-4">
                        <div className="space-y-2">
                            {navItems.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="block px-4 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-background/50 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="mailto:dexter.montero09@gmail.com"
                                className="block px-4 py-2 bg-primary hover:bg-primary-dark text-foreground rounded-lg transition mt-4"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
