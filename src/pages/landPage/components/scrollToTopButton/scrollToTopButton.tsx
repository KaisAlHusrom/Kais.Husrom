import { useEffect, useState } from 'react';
import { Button } from '@/components/ui';

import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button when page is scrolled down 300px
            const show = window.scrollY > 300;
            setShowScrollTop(show);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Button
            onClick={scrollToTop}
            className={`
                    fixed bottom-8 right-8 
                    bg-primary hover:bg-primary/90
                    text-white 
                    rounded-full 
                    shadow-lg
                    transition-all duration-300 ease-in-out
                    w-[50px]
                    h-[50px]
                    ${
                        showScrollTop
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-16 pointer-events-none'
                    }
                `}
            aria-label='Scroll to top'
        >
            <ChevronUp size={24} />
        </Button>
    );
};

export default ScrollToTopButton;
