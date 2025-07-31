
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, X } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ScheduleDeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productId?: string;
}

const ScheduleDeliveryModal = ({ isOpen, onClose, productName, productId }: ScheduleDeliveryModalProps) => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM", 
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM"
  ];

  const sendEmailNotification = async (deliveryData: any) => {
    try {
      const emailData = {
        type: "delivery",
        customerName: deliveryData.customer_name,
        customerPhone: deliveryData.customer_phone,
        customerEmail: deliveryData.customer_email,
        deliveryAddress: deliveryData.delivery_address,
        deliveryArea: deliveryData.delivery_area,
        productName: deliveryData.product_name,
        quantity: deliveryData.quantity,
        preferredDate: deliveryData.preferred_date,
        preferredTimeSlot: deliveryData.preferred_time_slot,
        specialInstructions: deliveryData.special_instructions,
        timestamp: new Date().toLocaleString('en-US', {
          timeZone: 'Africa/Dar_es_Salaam',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const { data, error } = await supabase.functions.invoke('send-notification-email', {
        body: emailData
      });

      if (error) {
        console.error('Email sending error:', error);
        throw error;
      }

      console.log('Email sent successfully:', data);
      return data;
    } catch (error) {
      console.error('Failed to send email notification:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    const deliveryData = {
      customer_name: formData.get('customer_name') as string,
      customer_phone: formData.get('customer_phone') as string,
      customer_email: formData.get('customer_email') as string,
      delivery_address: formData.get('delivery_address') as string,
      delivery_area: formData.get('delivery_area') as string,
      product_name: productName || formData.get('product_name') as string,
      product_id: productId,
      quantity: parseInt(formData.get('quantity') as string) || 1,
      preferred_date: date?.toISOString().split('T')[0],
      preferred_time_slot: formData.get('time_slot') as string,
      special_instructions: formData.get('special_instructions') as string,
    };

    try {
      // First, save to Supabase database
      const { error } = await supabase
        .from('deliveries')
        .insert(deliveryData);

      if (error) throw error;

      console.log('Delivery request saved to database successfully');

      // Then, send email notification
      try {
        await sendEmailNotification(deliveryData);
        
        toast({
          title: "Delivery Scheduled!",
          description: "Your delivery request has been submitted successfully and our sales team has been notified. We will contact you to confirm the details.",
        });
      } catch (emailError) {
        // Database save succeeded, but email failed - still show success but mention email issue
        console.error('Email notification failed:', emailError);
        
        toast({
          title: "Delivery Scheduled!",
          description: "Your delivery request has been submitted successfully. We will contact you to confirm the details.",
        });
      }

      onClose();
      
      // Reset form
      e.currentTarget.reset();
      setDate(undefined);
      
    } catch (error) {
      console.error('Error submitting delivery request:', error);
      toast({
        title: "Error",
        description: "Failed to submit delivery request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5" />
              <span>Schedule Delivery{productName && ` - ${productName}`}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 p-4">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Customer Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customer_name">Full Name *</Label>
                <Input id="customer_name" name="customer_name" required />
              </div>
              
              <div>
                <Label htmlFor="customer_phone">Phone Number *</Label>
                <Input id="customer_phone" name="customer_phone" type="tel" placeholder="+255..." required />
              </div>
            </div>

            <div>
              <Label htmlFor="customer_email">Email Address</Label>
              <Input id="customer_email" name="customer_email" type="email" />
            </div>
          </div>

          {/* Delivery Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Delivery Details</h3>
            
            <div>
              <Label htmlFor="delivery_address">Delivery Address *</Label>
              <Textarea id="delivery_address" name="delivery_address" placeholder="Enter full delivery address..." required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="delivery_area">Delivery Area *</Label>
                <Input 
                  id="delivery_area" 
                  name="delivery_area" 
                  placeholder="Enter your delivery area (e.g., Stone Town, Ng'ambo, Michenzani...)" 
                  required 
                />
              </div>

              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" name="quantity" type="number" min="1" defaultValue="1" />
              </div>
            </div>

            {!productName && (
              <div>
                <Label htmlFor="product_name">Product Name *</Label>
                <Input id="product_name" name="product_name" required />
              </div>
            )}
          </div>

          {/* Schedule Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Preferred Schedule</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Preferred Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="time_slot">Preferred Time Slot *</Label>
                <Select name="time_slot" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <Label htmlFor="special_instructions">Special Instructions</Label>
            <Textarea 
              id="special_instructions" 
              name="special_instructions" 
              placeholder="Any special delivery instructions..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={isSubmitting || !date}>
              {isSubmitting ? "Scheduling..." : "Schedule Delivery"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDeliveryModal;
