import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-foreground">
                        DM
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {['About', 'Projects', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                        </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border cursor-pointer">
                        <div className="flex flex-col space-y-4 px-6 py-4">
                        {['About', 'Projects', 'Contact'].map((item) => (
                            <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                            {item}
                            </button>
                        ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;