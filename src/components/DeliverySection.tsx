
import { MapPin, Clock, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const DeliverySection = () => {
  const navigate = useNavigate();

  const deliveryAreas = [
    { area: "Stone Town", time: "Same Day", available: true },
    { area: "Nungwi", time: "Next Day", available: true },
    { area: "Kendwa", time: "Next Day", available: true },
    { area: "Matemwe", time: "Next Day", available: true },
    { area: "Paje", time: "Next Day", available: true },
    { area: "Jambiani", time: "Next Day", available: true },
  ];

  const handleRequestExpress = () => {
    navigate('/contact');
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Delivery Coverage Area</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver across all major areas in Zanzibar with our reliable logistics network.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Delivery areas */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {deliveryAreas.map((area, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-medium">{area.area}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{area.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-yellow/10 border-l-4 border-yellow p-4 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <Truck className="h-6 w-6 text-yellow mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Free Delivery on Orders Over 1,150,000 TZS</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Enjoy complimentary delivery service for large orders across all delivery zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Delivery stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Average Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Island Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Delivery Trucks</div>
              </div>
            </div>
            
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Need Express Delivery?</h3>
                <p className="mb-4 opacity-90">
                  Contact us for same-day delivery options available in Stone Town and surrounding areas.
                </p>
                <button 
                  onClick={handleRequestExpress}
                  className="bg-yellow text-yellow-foreground px-6 py-2 rounded-lg font-medium hover:bg-yellow/90 transition-colors"
                >
                  Request Express
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
