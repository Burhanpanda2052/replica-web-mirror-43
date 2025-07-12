import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Truck, Clock, MapPin, Phone, Info, X } from "lucide-react";

interface DeliveryInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const DeliveryInfoModal = ({ isOpen, onClose, productName }: DeliveryInfoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5" />
              <span>Delivery Information{productName && ` - ${productName}`}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 p-4">
          {/* Delivery Areas */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Delivery Coverage Areas
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Badge variant="secondary">Stone Town</Badge>
              <Badge variant="secondary">Ng'ambo</Badge>
              <Badge variant="secondary">Michenzani</Badge>
              <Badge variant="secondary">Mlandege</Badge>
              <Badge variant="secondary">Kilimahewa</Badge>
              <Badge variant="secondary">Magomeni</Badge>
              <Badge variant="secondary">Kilifi</Badge>
              <Badge variant="secondary">Kinyasini</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              We deliver across all major areas in Zanzibar. Contact us for areas not listed above.
            </p>
          </div>

          <Separator />

          {/* Delivery Times */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Delivery Schedule
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Monday - Friday:</span>
                <span className="text-sm font-medium">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Saturday:</span>
                <span className="text-sm font-medium">8:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sunday:</span>
                <span className="text-sm font-medium">Emergency only</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Delivery Fees */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center">
              <Truck className="h-4 w-4 mr-2" />
              Delivery Charges
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Within Stone Town:</span>
                <span className="text-sm font-medium">Free delivery above 500,000 TZS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Suburban areas:</span>
                <span className="text-sm font-medium">15,000 - 25,000 TZS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Remote areas:</span>
                <span className="text-sm font-medium">Contact for quote</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Special Instructions */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center">
              <Info className="h-4 w-4 mr-2" />
              Important Notes
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Delivery times may vary during peak construction seasons</li>
              <li>• Large orders require 24-48 hours advance notice</li>
              <li>• Site accessibility must be confirmed before delivery</li>
              <li>• Customer must be present during delivery for verification</li>
              <li>• Additional charges apply for crane or special equipment needs</li>
            </ul>
          </div>

          <Separator />

          {/* Contact Information */}
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Contact for Delivery
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+255 987 654 321</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Call between 8:00 AM - 5:00 PM for delivery scheduling and inquiries.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button className="flex-1">
              <Phone className="h-4 w-4 mr-2" />
              Call for Delivery
            </Button>
            <Button variant="outline" className="flex-1">
              Schedule Delivery
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryInfoModal;