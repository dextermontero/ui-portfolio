import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import downloadCV from "@/components/assets/resume/Dexter Montero.pdf";

export function Hero() {
    const scrollToAbout = () => {
        const element = document.getElementById("about");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToProjects = () => {
        const element = document.getElementById("projects");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-sm text-accent font-medium">
                                Backend Engineer
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Dexter Montero
                            </span>
                        </h1>

                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl">
                            A passionate backend engineer building reliable, scalable APIs and
                            microservices. I specialize in clean architecture, modern
                            technologies, and solving real-world problems through code.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button
                                onClick={scrollToProjects}
                                size="lg"
                                className="bg-primary hover:bg-primary-dark cursor-pointer"
                            >
                                View My Work
                            </Button>
                            <a href={downloadCV} download="Dexter Montero.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className='cursor-pointer text-foreground hover:text-blue-600 hover:bg-primary transition'>
                                    Download Resume
                                </Button>
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 text-muted-foreground">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent" />
                                <a
                                    href="mailto:dexter.montero09@gmail.com"
                                    className="hover:text-foreground transition"
                                >
                                    dexter.montero09@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent" />
                                <a
                                    href="tel:+63976103816"
                                    className="hover:text-foreground transition"
                                >
                                    +63 (0976) 103-8160
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-accent" />
                                <span>Quezon City, Philippines</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stats */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Projects", value: "8+" },
                            { label: "Tech Stack", value: "15+" },
                            { label: "Years Coding", value: "5+" },
                            { label: "Technologies", value: "Full-Stack" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm hover:bg-card/80 transition"
                            >
                                <div className="text-3xl font-bold text-accent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/dextermontero"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-lg bg-card/50 border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dextermontero/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-lg bg-card/50 border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:dexter.montero09@gmail.com"
                                className="w-12 h-12 rounded-lg bg-card/50 border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <Button
                    onClick={scrollToAbout}
                    variant="ghost"
                    className="cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
                >
                    <ArrowDown className="w-6 h-6 text-accent" />
                </Button>
            </div>
        </section>
    );
}
