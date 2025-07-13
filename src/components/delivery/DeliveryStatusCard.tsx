
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import StatusTimeline from "./StatusTimeline";
import DeliveryDetails from "./DeliveryDetails";
import OrderItems from "./OrderItems";
import LiveUpdates from "./LiveUpdates";

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

interface DeliveryStatusCardProps {
  delivery: DeliveryStatus;
}

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

const DeliveryStatusCard = ({ delivery }: DeliveryStatusCardProps) => {
  return (
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
        <StatusTimeline status={delivery.status} />

        <Separator />

        <DeliveryDetails
          location={delivery.location}
          estimatedTime={delivery.estimatedTime}
          driver={delivery.driver}
          phone={delivery.phone}
        />

        <Separator />

        <OrderItems items={delivery.items} />

        <LiveUpdates status={delivery.status} />
      </CardContent>
    </Card>
  );
};

export default DeliveryStatusCard;
