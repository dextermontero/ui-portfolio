import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/mock/projects";

const statusStyles = {
    "Completed":   { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/25", dot: "bg-emerald-400" },
    "In Progress": { bg: "bg-amber-500/10",   text: "text-amber-400",   border: "border-amber-500/25",   dot: "bg-amber-400" },
};

export function Project() {
    const featuredProjects = projects.filter((p) => p.featured);
    const otherProjects    = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="relative py-16 lg:py-24 px-4 overflow-hidden">
            {/* Background accent */}
            <div className="hidden lg:block absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[130px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* ── Section header ─────────────────────────── */}
                <div className="mb-10 lg:mb-16">
                    <div className="section-label mb-5">Portfolio</div>
                    <div className="flex items-end justify-between gap-4 flex-wrap">
                        <div>
                            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
                                Featured{" "}
                                <span className="gradient-text">Projects</span>
                            </h2>
                            <p className="text-muted-foreground max-w-xl">
                                A selection of my recent work — APIs, dashboards, and full-stack
                                applications built with modern tooling.
                            </p>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">
                            {featuredProjects.length} projects
                        </span>
                    </div>
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-accent to-primary mt-5" />
                </div>

                {/* ── Featured grid ───────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
                    {featuredProjects.map((project, i) => {
                        const status = project.status ? statusStyles[project.status] : null;
                        const isSpotlight = i === 0;

                        return (
                            <div
                                key={i}
                                className={`
                                    card-glow-border group relative rounded-2xl overflow-hidden
                                    bg-card/50 border border-border/70 backdrop-blur-sm
                                    hover:bg-card/75 transition-all duration-300
                                    flex flex-col
                                    ${isSpotlight ? "md:col-span-2 lg:col-span-2" : ""}
                                `}
                            >
                                {/* Top bar accent */}
                                <div className={`h-0.5 w-full bg-gradient-to-r from-primary via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="p-6 flex flex-col flex-1">
                                    {/* Header */}
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono text-muted-foreground/60">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <h3 className={`font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-200
                                                            ${isSpotlight ? "text-xl" : "text-lg"}`}>
                                                {project.title}
                                            </h3>
                                        </div>
                                        {status && (
                                            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border flex-shrink-0
                                                            ${status.bg} ${status.text} ${status.border}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                                                {project.status}
                                            </div>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className={`text-muted-foreground leading-relaxed flex-1 mb-5
                                                   ${isSpotlight ? "text-sm" : "text-sm line-clamp-3"}`}>
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.technologies.slice(0, isSpotlight ? 8 : 4).map((tech, j) => (
                                            <span
                                                key={j}
                                                className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary/80 border border-primary/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > (isSpotlight ? 8 : 4) && (
                                            <span className="px-2 py-0.5 text-xs rounded-md bg-border/60 text-muted-foreground">
                                                +{project.technologies.length - (isSpotlight ? 8 : 4)}
                                            </span>
                                        )}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-2 pt-4 border-t border-border/40">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                                                           bg-accent/15 text-accent hover:bg-accent hover:text-accent-foreground
                                                           transition-all duration-200 text-xs font-medium cursor-pointer"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                Live Demo
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                                                           bg-card/80 border border-border/60 text-muted-foreground
                                                           hover:text-foreground hover:border-border
                                                           transition-all duration-200 text-xs font-medium cursor-pointer"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── Other projects ─────────────────────────── */}
                {otherProjects.length > 0 && (
                    <div>
                        <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                            Other Projects
                            <div className="flex-1 h-px bg-border/50" />
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {otherProjects.map((project, i) => (
                                <div
                                    key={i}
                                    className="card-glow-border group rounded-xl p-4 bg-card/40 border border-border/60
                                               hover:bg-card/65 transition-all duration-300 backdrop-blur-sm flex flex-col"
                                >
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h4>
                                        {(project.demo || project.github) && (
                                            <a
                                                href={project.demo ?? project.github ?? "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-accent transition flex-shrink-0 cursor-pointer"
                                                aria-label={`Open ${project.title}`}
                                            >
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-3 flex-1 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.slice(0, 3).map((tech, j) => (
                                            <span key={j} className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary/80">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-xs px-1.5 py-0.5 rounded bg-border/60 text-muted-foreground">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
