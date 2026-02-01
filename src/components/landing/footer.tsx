import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border/30">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-4">Dexter</h3>
                        <p className="text-sm text-muted-foreground">
                            Full-stack developer passionate about building scalable APIs and
                            modern web applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {["Home", "About", "Projects", "Contact"].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                                        className="text-muted-foreground hover:text-accent transition text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Tech Stack</h4>
                        <ul className="space-y-2">
                            {["React", "Laravel", "FastAPI", "Docker"].map((item, i) => (
                                <li key={i} className="text-muted-foreground text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Follow</h4>
                        <div className="flex gap-3">
                            {[
                                { icon: Github, href: "#", label: "GitHub" },
                                { icon: Linkedin, href: "#", label: "LinkedIn" },
                                { icon: Twitter, href: "#", label: "Twitter" },
                                {
                                    icon: Mail,
                                    href: "mailto:dexter.montero09@gmail.com",
                                    label: "Email",
                                },
                            ].map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={i}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-lg bg-card/50 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-card hover:border-accent/30 transition"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/30 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p>
                            &copy; 2022 - {currentYear} Dexter Montero. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-foreground transition">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-foreground transition">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
