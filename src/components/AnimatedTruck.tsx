
import { Truck } from 'lucide-react';
import { useTruckAnimation } from '@/hooks/useGSAPAnimations';

const AnimatedTruck = () => {
  const truckRef = useTruckAnimation();

  return (
    <div 
      ref={truckRef}
      className="absolute top-4 right-4 opacity-0"
    >
      <Truck className="h-12 w-12 text-yellow drop-shadow-lg" />
    </div>
  );
};

export default AnimatedTruck;
