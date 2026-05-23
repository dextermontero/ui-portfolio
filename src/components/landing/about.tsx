import { skillCategories } from "@/mock/skills";

const categoryColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
    "Frontend": {
        bg: "bg-blue-500/10", text: "text-blue-400",
        border: "border-blue-500/25", dot: "bg-blue-400",
    },
    "Backend": {
        bg: "bg-violet-500/10", text: "text-violet-400",
        border: "border-violet-500/25", dot: "bg-violet-400",
    },
    "Database": {
        bg: "bg-emerald-500/10", text: "text-emerald-400",
        border: "border-emerald-500/25", dot: "bg-emerald-400",
    },
    "DevOps & Cloud": {
        bg: "bg-amber-500/10", text: "text-amber-400",
        border: "border-amber-500/25", dot: "bg-amber-400",
    },
};

const highlights = [
    "RESTful API Design & Development",
    "Microservices Architecture",
    "Database Optimization",
    "Cloud Deployment & Infrastructure",
    "CI/CD Pipeline Development",
];

export function About() {
    return (
        <section id="about" className="relative py-16 lg:py-24 px-4 overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background pointer-events-none" />
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-primary/8 blur-[70px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div className="mb-10 lg:mb-16">
                    <div className="section-label mb-5">About Me</div>
                    <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Passionate about{" "}
                        <span className="gradient-text">building scalable systems</span>
                    </h2>
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Bio + highlights */}
                    <div className="space-y-8">
                        <div className="space-y-5 text-muted-foreground leading-relaxed">
                            <p>
                                I&apos;m a backend engineer with a passion for designing{" "}
                                <span className="text-foreground font-medium">clean, maintainable architectures</span>{" "}
                                and solving real-world problems through code. With expertise in
                                distributed systems, cloud infrastructure, and performance
                                optimization, I focus on creating reliable APIs and microservices
                                that scale.
                            </p>
                            <p>
                                I continuously improve my skills by exploring emerging
                                technologies and tackling complex technical challenges. When I&apos;m
                                not coding, I enjoy mentoring other developers and staying updated
                                with industry trends.
                            </p>
                        </div>

                        {/* Specializations */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                                Specializations
                            </p>
                            <div className="space-y-2.5">
                                {highlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 group cursor-default">
                                        <div
                                            className="w-1.5 h-1.5 rounded-full flex-shrink-0
                                                       bg-gradient-to-br from-primary to-accent
                                                       group-hover:scale-125 transition-transform duration-200"
                                        />
                                        <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Status card */}
                        <div className="card-glow-border rounded-2xl p-5 bg-card/50 border border-border/70 backdrop-blur-sm">
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                                        Current Status
                                    </p>
                                    <p className="text-sm font-medium text-foreground">
                                        Open to new opportunities
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-xs text-emerald-400 font-medium">Available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Color-coded skill cards */}
                    <div className="space-y-4">
                        {skillCategories.map((category, i) => {
                            const colors = categoryColors[category.title] ?? {
                                bg: "bg-primary/10", text: "text-primary",
                                border: "border-primary/25", dot: "bg-primary",
                            };
                            return (
                                <div
                                    key={i}
                                    className="card-glow-border rounded-2xl p-5 bg-card/50 border border-border/70
                                               backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                                        <h3 className={`text-xs font-semibold uppercase tracking-widest ${colors.text}`}>
                                            {category.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, j) => (
                                            <span
                                                key={j}
                                                className={`px-2.5 py-1 rounded-lg text-xs font-medium border
                                                           ${colors.bg} ${colors.text} ${colors.border}
                                                           hover:opacity-90 transition cursor-default`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
