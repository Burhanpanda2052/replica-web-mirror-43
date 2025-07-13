
import { CheckCircle } from "lucide-react";

interface OrderItemsProps {
  items: string[];
}

const OrderItems = ({ items }: OrderItemsProps) => {
  return (
    <div>
      <h4 className="font-medium mb-3">Items in this delivery:</h4>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderItems;
