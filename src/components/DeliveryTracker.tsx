
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Truck } from "lucide-react";
import TrackingInput from "./delivery/TrackingInput";
import DeliveryStatusCard from "./delivery/DeliveryStatusCard";

interface DeliveryStatus {
  id: string;
  orderNumber: string;
  status: "preparing" | "in_transit" | "delivered";
  estimatedTime: string;
  driver: string;
  phone: string;
  location: string;
  items: string[];
}

const DeliveryTracker = () => {
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [delivery, setDelivery] = useState<DeliveryStatus | null>(null);

  // Mock delivery data
  const mockDeliveries: DeliveryStatus[] = [
    {
      id: "TB2024001",
      orderNumber: "TB2024001",
      status: "in_transit",
      estimatedTime: "2:30 PM",
      driver: "Mohammed Ali",
      phone: "+255 712 345 678",
      location: "En route to Stone Town - 15 minutes away",
      items: ["Premium Cement (50 bags)", "Steel Rebar (2 tons)", "Crushed Stone (5 m³)"]
    },
    {
      id: "TB2024002",
      orderNumber: "TB2024002",
      status: "preparing",
      estimatedTime: "4:00 PM",
      driver: "Hassan Mwinyi",
      phone: "+255 713 456 789",
      location: "Loading at warehouse",
      items: ["Building Blocks (500 units)", "Roofing Sheets (100 m²)"]
    }
  ];

  const trackDelivery = () => {
    const found = mockDeliveries.find(d => d.orderNumber === trackingNumber);
    setDelivery(found || null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Truck className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Track Your Delivery</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time tracking of your construction materials with live GPS updates and driver contact information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TrackingInput
            trackingNumber={trackingNumber}
            onTrackingNumberChange={setTrackingNumber}
            onTrack={trackDelivery}
          />

          {delivery && (
            <div className="space-y-6">
              <DeliveryStatusCard delivery={delivery} />
            </div>
          )}

          {trackingNumber && !delivery && (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">
                  No delivery found with tracking number "{trackingNumber}". 
                  Please check the number and try again.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeliveryTracker;
