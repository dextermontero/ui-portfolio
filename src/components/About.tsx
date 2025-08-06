import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
    const skills = [
        {
            icon: <Code className="h-8 w-8" />,
            title: 'Frontend Development',
            description: 'React, TypeScript, Bootstrap, Tailwind CSS, ShadCN UI',
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            icon: <Database className="h-8 w-8" />,
            title: 'Backend Development',
            description: 'PHP/Laravel, FastAPI, MySQL, MongoDB, Express API, Microservice',
            color: 'from-green-500/20 to-emerald-500/20'
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: 'Web Technologies',
            description: 'REST APIs, Redis',
            color: 'from-purple-500/20 to-violet-500/20'
        },
        {
            icon: <Smartphone className="h-8 w-8" />,
            title: 'DevOps & Cloud Tools',
            description: 'k3s, Kustomize, AWS, Docker, CI/CD, Bitbucket Pipelines',
            color: 'from-orange-500/20 to-red-500/20'
        }
    ];

    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        About Me
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I'm a Backend Engineer passionate about building reliable, scalable APIs and microservices. I focus on designing clean, maintainable architectures and solving real-world problems through code. I enjoy working with modern backend technologies and continuously improving my skills in distributed systems, cloud infrastructure, and performance optimization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skills.map((skill, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <CardContent className="p-6 text-center">
                                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${skill.color} text-primary mb-4`}>
                                {skill.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                {skill.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                {skill.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* <div className="bg-card rounded-lg p-8 shadow-sm border">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                My Journey
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                I started my journey in web development 5 years ago, and since then, 
                                I've had the privilege of working with amazing teams and clients to 
                                build products that make a difference.
                            </p>
                            <p className="text-muted-foreground">
                                When I'm not coding, you can find me exploring new technologies, 
                                contributing to open-source projects, or sharing knowledge with the 
                                developer community.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">React/TypeScript</span>
                                <span className="text-sm text-muted-foreground">95%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Node.js/Python</span>
                                <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">UI/UX Design</span>
                                <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default About;