import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calculator, Weight, Square, Building, Box, X } from "lucide-react";
import { useState } from "react";
import EnhancedTonnageCalculator from "./calculators/EnhancedTonnageCalculator";
import SquareMetersCalculator from "./calculators/SquareMetersCalculator";
import BlocksCalculator from "./calculators/BlocksCalculator";
import CubicMetersCalculator from "./calculators/CubicMetersCalculator";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const CalculatorModal = ({ isOpen, onClose, productName }: CalculatorModalProps) => {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  const calculatorTypes = [
    {
      id: "tonnage",
      title: "Steel Calculator",
      description: "Calculate tonnage with real-time pricing",
      icon: Weight,
      color: "text-slate-600",
    },
    {
      id: "square-meters",
      title: "Area Calculator",
      description: "Calculate square meters needed",
      icon: Square,
      color: "text-zinc-600",
    },
    {
      id: "blocks",
      title: "Blocks Calculator",
      description: "Calculate number of blocks needed",
      icon: Building,
      color: "text-amber-600",
    },
    {
      id: "cubic-meters",
      title: "Volume Calculator",
      description: "Calculate cubic meters of materials",
      icon: Box,
      color: "text-orange",
    },
  ];

  const renderCalculator = () => {
    switch (activeCalculator) {
      case "tonnage":
        return <EnhancedTonnageCalculator />;
      case "square-meters":
        return <SquareMetersCalculator />;
      case "blocks":
        return <BlocksCalculator />;
      case "cubic-meters":
        return <CubicMetersCalculator />;
      default:
        return null;
    }
  };

  const handleClose = () => {
    setActiveCalculator(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calculator className="h-5 w-5" />
              <span>Material Calculator{productName && ` - ${productName}`}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        {!activeCalculator ? (
          <div className="grid md:grid-cols-2 gap-4 p-4">
            {calculatorTypes.map((calc) => (
              <div 
                key={calc.id} 
                className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setActiveCalculator(calc.id)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <calc.icon className={`h-8 w-8 ${calc.color}`} />
                  <div>
                    <h3 className="font-semibold">{calc.title}</h3>
                    <p className="text-sm text-muted-foreground">{calc.description}</p>
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  Open Calculator
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4">
            <Button
              variant="outline"
              onClick={() => setActiveCalculator(null)}
              className="mb-4"
              size="sm"
            >
              ← Back to Calculators
            </Button>
            {renderCalculator()}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CalculatorModal;