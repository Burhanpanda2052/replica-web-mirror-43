
import { useEffect, useRef, useState } from 'react';

interface UseCounterAnimationOptions {
  end: number;
  duration?: number;
  decimals?: number;
  start?: number;
  suffix?: string;
  prefix?: string;
}

export const useCounterAnimation = ({
  end,
  duration = 2000,
  decimals = 0,
  start = 0,
  suffix = '',
  prefix = ''
}: UseCounterAnimationOptions) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = start;
    const endValue = end;
    const totalChange = endValue - startValue;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (totalChange * easeOutCubic);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration]);

  const displayValue = `${prefix}${count.toFixed(decimals)}${suffix}`;
  
  return { elementRef, displayValue, isAnimating: isVisible && count < end };
};
