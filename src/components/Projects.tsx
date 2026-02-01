import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/mock/projects';

const Projects: React.FC = () => {

    return (
        <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Featured Projects
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and passion for creating
                    innovative solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="relative overflow-hidden">
                            {/* <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            /> */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                <Button size="sm" variant="secondary" asChild>
                                    <a
                                        href={project.demo || '#'}
                                        onClick={(e) => {
                                            if (project.demo === '#') {
                                                e.preventDefault();
                                            }
                                        }}
                                        target={project.demo !== '#' ? '_blank' : undefined}
                                        rel={project.demo !== '#' ? 'noopener noreferrer' : undefined}
                                        className={`${project.demo === '#' ? 'bg-gray-300 text-gray-600 cursor-not-allowed opacity-50' : 'hover:shadow-sm hover:bg-gray-100'}`}
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Demo
                                    </a>
                                </Button>
                                <Button size="sm" variant="secondary" asChild>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="h-4 w-4 mr-2" />
                                        Code
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <CardHeader>
                            <CardTitle className="text-xl text-foreground">
                                {project.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <Badge key={techIndex} variant="secondary">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        </section>
    );
};

export default Projects;
