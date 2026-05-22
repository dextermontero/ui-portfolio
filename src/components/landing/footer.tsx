import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
    { icon: Github,   href: "https://github.com/dextermontero",           label: "GitHub"   },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dextermontero/", label: "LinkedIn" },
    { icon: Mail,     href: "mailto:dexter.montero09@gmail.com",          label: "Email"    },
];

const navLinks = [
    { label: "Home",     href: "#" },
    { label: "About",    href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-border/30 overflow-hidden">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/6 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <a href="#" className="font-heading text-2xl font-bold gradient-text inline-block mb-2">
                            DM
                        </a>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Full-stack developer building scalable APIs and modern web applications.
                        </p>
                    </div>

                    {/* Nav links */}
                    <nav className="flex items-center gap-6">
                        {navLinks.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social links */}
                    <div className="flex items-center gap-2">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-9 h-9 rounded-xl bg-card/50 border border-border/60
                                           flex items-center justify-center text-muted-foreground
                                           hover:text-accent hover:border-accent/40 hover:bg-accent/10
                                           transition-all duration-200 cursor-pointer"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/30 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                        <p>&copy; 2022 – {currentYear} Dexter Montero. All rights reserved.</p>
                        <div className="flex items-center gap-1">
                            <span>Built with</span>
                            <span className="text-primary font-medium">React</span>
                            <span>+</span>
                            <span className="text-accent font-medium">Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
