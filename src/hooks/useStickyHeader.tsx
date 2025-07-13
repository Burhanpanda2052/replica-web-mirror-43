
import { useEffect, useState } from 'react';

export const useStickyHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show header when scrolling up or at the top
          if (currentScrollY < lastScrollY || currentScrollY < 10) {
            setIsVisible(true);
          } 
          // Hide header when scrolling down (but not at the very top)
          else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return { isVisible, isScrolled: lastScrollY > 10 };
};
