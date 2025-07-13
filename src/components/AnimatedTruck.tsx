
import { Truck } from 'lucide-react';
import { useTruckAnimation } from '@/hooks/useGSAPAnimations';

const AnimatedTruck = () => {
  const truckRef = useTruckAnimation();

  return (
    <div 
      ref={truckRef}
      className="absolute top-4 left-0 opacity-0 z-10"
    >
      <Truck className="h-12 w-12 text-yellow drop-shadow-lg" />
    </div>
  );
};

export default AnimatedTruck;
