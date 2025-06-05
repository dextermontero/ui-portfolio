import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const MoveToTop: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        setShowButton(scrollPosition > 100);
    };

    const moveToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        showButton && (
            <button
                className="fixed bottom-4 right-5 z-[100px] hover:cursor-pointer bg-[#2A2D2E] p-4 rounded-full text-gray-50 shadow-md animate-bounce hover:opacity-70 transition duration-1000 ease-in-out"
                onClick={moveToTop}
            >
                <ArrowUp />
            </button>
        )
    );
};

export default MoveToTop;