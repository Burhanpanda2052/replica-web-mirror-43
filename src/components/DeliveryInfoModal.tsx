import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Truck, Clock, MapPin, Phone, Info, X, Calendar } from "lucide-react";
import { useState } from "react";
import ScheduleDeliveryModal from "./ScheduleDeliveryModal";

interface DeliveryInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productId?: string;
}

const DeliveryInfoModal = ({ isOpen, onClose, productName, productId }: DeliveryInfoModalProps) => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
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
              <Badge variant="secondary">Magomeni</Badge>
              <Badge variant="secondary">Kinyasini</Badge>
              <Badge variant="secondary">Fumba</Badge>
              <Badge variant="secondary">Matemwe</Badge>
              <Badge variant="secondary">Paje</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              We deliver across all major areas in Zanzibar, simply let us know where you want us to deliver and we will make the delivery for you.
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
                <span className="text-sm">+255 769 391 802</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Call between 8:00 AM - 5:00 PM for delivery scheduling and inquiries.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <Button className="w-full max-w-md" onClick={() => setShowScheduleModal(true)}>
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Delivery
            </Button>
          </div>
        </div>

        {/* Schedule Delivery Modal */}
        <ScheduleDeliveryModal 
          isOpen={showScheduleModal} 
          onClose={() => setShowScheduleModal(false)}
          productName={productName}
          productId={productId}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryInfoModal;