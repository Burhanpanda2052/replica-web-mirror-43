
import { MapPin, Clock, Truck, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeliveryDetailsProps {
  location: string;
  estimatedTime: string;
  driver: string;
  phone: string;
}

const DeliveryDetails = ({ location, estimatedTime, driver, phone }: DeliveryDetailsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-primary mt-1" />
          <div>
            <div className="font-medium">Current Location</div>
            <div className="text-sm text-muted-foreground">{location}</div>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-primary mt-1" />
          <div>
            <div className="font-medium">Estimated Arrival</div>
            <div className="text-sm text-muted-foreground">{estimatedTime}</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Truck className="h-5 w-5 text-primary mt-1" />
          <div>
            <div className="font-medium">Driver</div>
            <div className="text-sm text-muted-foreground">{driver}</div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Phone className="h-4 w-4 mr-2" />
            Call Driver
          </Button>
          <Button variant="outline" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
