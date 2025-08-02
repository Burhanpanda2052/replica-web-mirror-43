

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  color: "orange" | "blue" | "red" | "green" | "purple" | "yellow" | "gray" | "slate" | "amber" | "brick" | "zinc" | "steel";
  icon: LucideIcon;
  features?: string[];
  price?: string;
}

const ServiceCard = ({ title, description, color, icon: Icon, features, price }: ServiceCardProps) => {
  const colorClasses = {
    orange: "bg-orange text-orange-foreground",
    blue: "bg-blue text-blue-foreground", 
    red: "bg-gradient-to-br from-red-400 to-red-600 text-white", // Updated to gradient
    green: "bg-green text-green-foreground",
    purple: "bg-purple text-purple-foreground",
    yellow: "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white", // Updated to gradient
    // New material-appropriate colors
    gray: "bg-gradient-to-br from-gray-400 to-gray-600 text-white",
    slate: "bg-gradient-to-br from-slate-500 to-slate-700 text-white",
    amber: "bg-gradient-to-br from-amber-200 to-orange text-gray-800",
    brick: "bg-gradient-to-br from-red-400 to-red-600 text-white",
    zinc: "bg-gradient-to-br from-zinc-400 to-zinc-600 text-white",
    steel: "bg-gradient-to-br from-gray-600 to-gray-800 text-white"
  };

  return (
    <Card className={`${colorClasses[color]} border-0 h-full`}>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Icon className="h-8 w-8" />
          {price && (
            <div className="text-right">
              <div className="text-2xl font-bold">{price}</div>
              <div className="text-sm opacity-80">Starting from</div>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="opacity-90 text-sm">{description}</p>
        </div>
        
        {features && (
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm opacity-90 flex items-center">
                <span className="w-1.5 h-1.5 bg-current rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Button 
          variant="secondary" 
          className="w-full bg-white/20 hover:bg-white/30 border-white/30"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

