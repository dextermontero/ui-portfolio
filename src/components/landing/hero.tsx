import { ArrowDown, Mail, Phone, MapPin, FileText } from "lucide-react";
import downloadCV from "@/components/assets/resume/Dexter Montero.pdf";

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

const stats = [
    { value: "8+",         label: "Projects Shipped" },
    { value: "15+",        label: "Technologies" },
    { value: "5+",         label: "Years Coding" },
    { value: "Full-Stack", label: "Capability" },
];

const socials = [
    { label: "GitHub",   href: "https://github.com/dextermontero",              icon: GitHubSVG   },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dextermontero/",    icon: LinkedInSVG },
    { label: "Email",    href: "mailto:dexter.montero09@gmail.com",             icon: Mail        },
];

const contactItems = [
    { icon: Mail,   text: "dexter.montero09@gmail.com", href: "mailto:dexter.montero09@gmail.com" },
    { icon: Phone,  text: "+63 (0976) 103-8160",        href: "tel:+63976103816" },
    { icon: MapPin, text: "Quezon City, Philippines",   href: "#" },
];

export function Hero() {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section className="relative min-h-svh flex items-center justify-center overflow-hidden px-4 py-20 lg:py-28">

            {/* ── Animated background ───────────────────────────── */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-0 bg-grid opacity-60" />
                <div className="hidden lg:block absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-primary/15 blur-[80px] animate-glow-drift" />
                <div className="hidden lg:block absolute -bottom-40 -right-32 w-[360px] h-[360px] rounded-full bg-accent/12 blur-[70px] animate-glow-drift delay-300" />
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-primary/6 blur-[55px] animate-glow-drift delay-150" />
                <div className="hero-vignette absolute inset-0" />
            </div>

            {/* ── Main content ──────────────────────────────────── */}
            <div className="relative z-10 max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* ── Left column ─────────────────────────────── */}
                    <div>
                        <div className="section-label mb-8 animate-fade-in-up">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
                            Backend Engineer · Full-Stack Developer
                        </div>

                        <h1 className="font-heading text-6xl lg:text-[4.5rem] font-bold leading-[1.05] mb-6 animate-fade-in-up delay-150">
                            <span className="block text-foreground/85 mb-1 text-4xl lg:text-5xl font-medium">
                                Hi, I&apos;m
                            </span>
                            <span className="block gradient-text">
                                Dexter<br />Montero
                            </span>
                        </h1>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-10 animate-fade-in-up delay-300">
                            I build{" "}
                            <span className="text-foreground font-medium">reliable, scalable APIs</span>{" "}
                            and microservices — specializing in clean architecture, cloud
                            infrastructure, and solving real-world problems through code.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up delay-400">
                            <button
                                onClick={() => scrollTo("projects")}
                                className="px-7 py-3 rounded-xl bg-primary hover:bg-primary/85 text-primary-foreground
                                           font-medium text-sm transition-all duration-200 cursor-pointer
                                           hover:shadow-lg hover:shadow-primary/30"
                            >
                                View My Work
                            </button>
                            <a
                                href={downloadCV}
                                download="Dexter Montero.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl
                                           border border-border/70 hover:border-primary/50
                                           text-foreground hover:text-primary text-sm font-medium
                                           transition-all duration-200 cursor-pointer hover:bg-primary/5"
                            >
                                <FileText className="w-4 h-4" />
                                Download Resume
                            </a>
                        </div>

                        {/* Socials + contact */}
                        <div className="animate-fade-in-up delay-500">
                            <div className="flex items-center gap-2 mb-5">
                                {socials.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-10 h-10 rounded-xl bg-card/60 border border-border/60
                                                   flex items-center justify-center text-muted-foreground
                                                   hover:text-accent hover:border-accent/40 hover:bg-accent/10
                                                   transition-all duration-200 cursor-pointer backdrop-blur-sm"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>

                            <div className="space-y-2">
                                {contactItems.map(({ icon: Icon, text, href }) => (
                                    <a
                                        key={text}
                                        href={href}
                                        className="flex items-center gap-2.5 text-sm text-muted-foreground
                                                   hover:text-foreground transition-colors duration-200 cursor-pointer w-fit"
                                    >
                                        <Icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                                        {text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Right column – stat cards ─────────────────── */}
                    <div className="animate-fade-in delay-200">
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="card-glow-border group rounded-2xl p-6
                                               bg-card/50 border border-border/70 backdrop-blur-sm
                                               hover:bg-card/75 transition-all duration-300 cursor-default"
                                >
                                    <div className="text-3xl lg:text-4xl font-bold font-heading mb-1 gradient-text">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative tech badge strip */}
                        <div className="mt-4 p-4 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm">
                            <p className="text-xs text-muted-foreground mb-3 uppercase tracking-widest">
                                Core Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Laravel", "FastAPI", "Node.js", "React", "TypeScript", "Docker", "PostgreSQL", "Kubernetes"].map((t) => (
                                    <span
                                        key={t}
                                        className="px-2.5 py-1 text-xs rounded-lg bg-primary/10 text-primary/90
                                                   border border-primary/20 hover:bg-primary/20 transition cursor-default"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="flex justify-center mt-10 lg:mt-16 animate-fade-in delay-700">
                    <button
                        onClick={() => scrollTo("about")}
                        className="flex flex-col items-center gap-1 text-muted-foreground
                                   hover:text-accent transition-colors duration-200 cursor-pointer group"
                        aria-label="Scroll to about"
                    >
                        <span className="text-xs tracking-widest uppercase opacity-50 group-hover:opacity-100 transition">
                            scroll
                        </span>
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                    </button>
                </div>
            </div>
        </section>
    );
}
