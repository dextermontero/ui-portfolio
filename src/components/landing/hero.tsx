import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin, FileText } from "lucide-react";
import downloadCV from "@/components/assets/resume/Dexter Montero.pdf";

const stats = [
    { value: "8+",         label: "Projects Shipped" },
    { value: "15+",        label: "Technologies" },
    { value: "5+",         label: "Years Coding" },
    { value: "Full-Stack", label: "Capability" },
];

const socials = [
    { label: "GitHub",   href: "https://github.com/dextermontero",              icon: Github   },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dextermontero/",    icon: Linkedin },
    { label: "Email",    href: "mailto:dexter.montero09@gmail.com",             icon: Mail     },
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
                <div className="hidden lg:block absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[130px] animate-glow-drift" />
                <div className="hidden lg:block absolute -bottom-40 -right-32 w-[550px] h-[550px] rounded-full bg-accent/12 blur-[110px] animate-glow-drift delay-300" />
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-primary/6 blur-[90px] animate-glow-drift delay-150" />
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
                            <span className="block gradient-text-shimmer">
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
