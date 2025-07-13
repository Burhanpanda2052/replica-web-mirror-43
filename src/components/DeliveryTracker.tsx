
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Truck, MapPin, Clock, CheckCircle, Phone, MessageSquare } from "lucide-react";

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing": return "bg-yellow-100 text-yellow-800";
      case "in_transit": return "bg-blue-100 text-blue-800";
      case "delivered": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "preparing": return "Preparing Order";
      case "in_transit": return "In Transit";
      case "delivered": return "Delivered";
      default: return "Unknown";
    }
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
          {/* Tracking Input */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Enter Tracking Number</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="tracking">Order Number</Label>
                  <Input
                    id="tracking"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="e.g., TB2024001"
                  />
                </div>
                <div className="flex items-end">
                  <Button onClick={trackDelivery}>
                    Track Delivery
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-muted-foreground">
                <p><strong>Try these tracking numbers:</strong> TB2024001 (In Transit) or TB2024002 (Preparing)</p>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Status */}
          {delivery && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Order #{delivery.orderNumber}</CardTitle>
                    <Badge className={getStatusColor(delivery.status)}>
                      {getStatusText(delivery.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Status Timeline */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${delivery.status === "preparing" ? "bg-yellow-500" : "bg-green-500"}`} />
                      <span className="text-sm">Order Preparing</span>
                    </div>
                    <div className="flex-1 h-px bg-gray-200" />
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${delivery.status === "in_transit" ? "bg-blue-500" : delivery.status === "delivered" ? "bg-green-500" : "bg-gray-300"}`} />
                      <span className="text-sm">In Transit</span>
                    </div>
                    <div className="flex-1 h-px bg-gray-200" />
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${delivery.status === "delivered" ? "bg-green-500" : "bg-gray-300"}`} />
                      <span className="text-sm">Delivered</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Current Status */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <div className="font-medium">Current Location</div>
                          <div className="text-sm text-muted-foreground">{delivery.location}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <div className="font-medium">Estimated Arrival</div>
                          <div className="text-sm text-muted-foreground">{delivery.estimatedTime}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Truck className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <div className="font-medium">Driver</div>
                          <div className="text-sm text-muted-foreground">{delivery.driver}</div>
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

                  <Separator />

                  {/* Order Items */}
                  <div>
                    <h4 className="font-medium mb-3">Items in this delivery:</h4>
                    <div className="space-y-2">
                      {delivery.items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Updates */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 animate-pulse" />
                      <div>
                        <div className="font-medium text-blue-900">Live Updates</div>
                        <div className="text-sm text-blue-700">
                          {delivery.status === "in_transit" && "Your driver will send photo confirmation upon arrival"}
                          {delivery.status === "preparing" && "You'll receive SMS notification when driver departs"}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
