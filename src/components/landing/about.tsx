import { skillCategories } from "@/mock/skills";

export function About() {
    return (
        <section
            id="about"
            className="py-20 px-4 bg-gradient-to-b from-background via-card/20 to-background"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                            <span className="text-accent font-semibold uppercase tracking-wide text-sm">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold text-foreground mb-6">
                            Passionate about building scalable systems
                        </h2>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            I&apos;m a backend engineer with a passion for designing clean,
                            maintainable architectures and solving real-world problems through
                            code. With expertise in distributed systems, cloud infrastructure,
                            and performance optimization, I focus on creating reliable APIs
                            and microservices that scale.
                        </p>

                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            I continuously improve my skills by exploring emerging
                            technologies, contributing to open-source projects, and tackling
                            complex technical challenges. When I&apos;m not coding, I enjoy
                            learning about new frameworks, mentoring other developers, and
                            staying updated with industry trends.
                        </p>

                        <div className="space-y-3">
                            {[
                                "RESTful API Design & Development",
                                "Microservices Architecture",
                                "Database Optimization",
                                "Cloud Deployment & Infrastructure",
                                "CI/CD Pipeline Development",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                    <span className="text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Skills Grid */}
                    <div className="space-y-6">
                        {skillCategories.map((category, i) => (
                            <div
                                key={i}
                                className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm hover:bg-card/80 transition"
                            >
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 rounded-full text-sm bg-primary/20 text-accent border border-primary/30 hover:bg-primary/30 transition cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
