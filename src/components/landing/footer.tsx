import { Mail } from "lucide-react";

const GitHubSVG = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const LinkedInSVG = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const socials = [
    { icon: GitHubSVG,   href: "https://github.com/dextermontero",           label: "GitHub"   },
    { icon: LinkedInSVG, href: "https://www.linkedin.com/in/dextermontero/", label: "LinkedIn" },
    { icon: Mail,        href: "mailto:dexter.montero09@gmail.com",          label: "Email"    },
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
            <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[140px] bg-primary/6 blur-[50px] rounded-full pointer-events-none" />

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
