
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseCounterAnimationOptions {
  start: number;
  end: number;
  duration?: number;
  suffix?: string;
  decimal?: boolean;
}

export const useCounterAnimation = ({ 
  start, 
  end, 
  duration = 2, 
  suffix = '', 
  decimal = false 
}: UseCounterAnimationOptions) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!counterRef.current || hasAnimated) return;

    const element = counterRef.current;
    const obj = { value: start };

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true);
          gsap.to(obj, {
            value: end,
            duration,
            ease: "power2.out",
            onUpdate: () => {
              if (element) {
                const value = decimal ? obj.value.toFixed(1) : Math.floor(obj.value);
                element.textContent = `${value}${suffix}`;
              }
            }
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [start, end, duration, suffix, decimal, hasAnimated]);

  return counterRef;
};
