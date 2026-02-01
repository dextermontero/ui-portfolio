import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/mock/projects";

export function Project() {
    const featuredProjects = projects.filter((p) => p.featured);
    const otherProjects = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
                        <span className="text-primary font-semibold uppercase tracking-wide text-sm">
                            Portfolio
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Here are some of my recent projects that showcase my skills and
                        passion for creating innovative solutions.
                    </p>
                </div>

                {/* Featured Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {featuredProjects.map((project, i) => (
                        <div
                            key={i}
                            className="group bg-card/50 border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:bg-card/80 transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="p-6 h-full flex flex-col">
                                {/* Header with Status */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-foreground flex-1">
                                        {project.title}
                                    </h3>
                                    {project.status && (
                                        <Badge
                                            variant={
                                                project.status === "In Progress"
                                                ? "default"
                                                : "secondary"
                                            }
                                        >
                                            {project.status}
                                        </Badge>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 rounded-full text-xs bg-primary/15 text-primary border border-primary/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 pt-4 border-t border-border/50">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground transition text-sm font-medium"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground transition text-sm font-medium"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            Other Projects
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {otherProjects.map((project, i) => (
                                <div
                                    key={i}
                                    className="group bg-card/30 border border-border/50 rounded-lg p-4 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <h4 className="font-semibold text-foreground mb-2">
                                        {project.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {project.technologies.slice(0, 3).map((tech, j) => (
                                            <span
                                                key={j}
                                                className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-xs px-2 py-0.5 rounded bg-border text-muted-foreground">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    {(project.demo || project.github) && (
                                        <div className="flex gap-2 text-sm">
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground transition text-sm font-medium"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Demo
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground transition text-sm font-medium"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    Code
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
