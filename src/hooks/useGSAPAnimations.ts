
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Truck driving animation
    const trucks = document.querySelectorAll('.truck-animation');
    trucks.forEach((truck, index) => {
      gsap.fromTo(truck, 
        { 
          x: -100, 
          opacity: 0 
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: truck,
            start: "top 85%",
            once: true
          }
        }
      );
    });

    // Cards slide in animation
    const cards = document.querySelectorAll('.card-animation');
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true
          }
        }
      );
    });

    // Hero elements animation
    const heroElements = document.querySelectorAll('.hero-animation');
    heroElements.forEach((element, index) => {
      gsap.fromTo(element,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out"
        }
      );
    });

    // Stats cards animation
    const statsCards = document.querySelectorAll('.stats-card-animation');
    statsCards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
