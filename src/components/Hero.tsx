import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import downloadCV from "@/components/assets/resume/Dexter_Montero.pdf";


const Hero: React.FC = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProjects = () => {
        const aboutSection = document.getElementById('projects');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted/20">
            <div className="container mx-auto px-6 text-center">
                <div className="animate-fade-in">
                    <div className="mb-6">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20">
                            <span className="text-4xl font-bold text-primary">DM</span>
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        Dexter Montero
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        {/* Full-Stack Developer passionate about creating beautiful, functional web applications
                        that solve real-world problems. */}
                        An aspiring software and web developer. This Portfolio, contains my accomplished and ongoing personal and academic projects.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button 
                            onClick={scrollToProjects}
                            size="lg" 
                            className="group cursor-pointer"
                        >
                            View My Work
                        <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </Button>
                        <a href={downloadCV} download="Dexter Montero.pdf">
                            <Button variant="outline" size="lg" className='cursor-pointer'>
                                Download Resume
                            </Button>
                        </a>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com/dextermontero"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:scale-110 transform duration-200"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dextermontero/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:scale-110 transform duration-200"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:dexter.montero09@gmail.com"
                            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:scale-110 transform duration-200"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-muted-foreground hover:text-foreground transition-colors" size={24} />
            </button>
        </section>
    );
}

export default Hero;