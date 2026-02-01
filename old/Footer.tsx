import React from 'react';
import {
    Github,
    Linkedin,
    Mail,
    // Heart
} from 'lucide-react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-border py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        {/* <p className="text-muted-foreground flex items-center">
                        Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Dexter Montero
                        </p> */}
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/dextermontero"
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dextermontero/"
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:dexter.montero09@gmail.com"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                        <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="text-center mt-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                        © 2022 - {year} Dexter Montero. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}


export default Footer;