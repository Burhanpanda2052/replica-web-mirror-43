
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Weight, Square, Building, Box } from "lucide-react";
import EnhancedTonnageCalculator from "./calculators/EnhancedTonnageCalculator";
import SquareMetersCalculator from "./calculators/SquareMetersCalculator";
import BlocksCalculator from "./calculators/BlocksCalculator";
import CubicMetersCalculator from "./calculators/CubicMetersCalculator";

const CalculatorSection = () => {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  const calculatorTypes = [
    {
      id: "tonnage",
      title: "Enhanced Steel Calculator",
      description: "Calculate tonnage with real-time pricing and waste factors",
      icon: Weight,
      color: "text-slate-600",
    },
    {
      id: "square-meters",
      title: "Roofing Calculator",
      description: "Calculate square meters of roofing materials needed",
      icon: Square,
      color: "text-zinc-600",
    },
    {
      id: "blocks",
      title: "Building Blocks Calculator",
      description: "Calculate number of blocks needed for your walls",
      icon: Building,
      color: "text-amber-600",
    },
    {
      id: "cubic-meters",
      title: "Aggregates Calculator",
      description: "Calculate cubic meters of sand, gravel, and aggregates",
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calculator className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Material Calculators</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Use our professional calculators with real-time pricing, waste factors, and accurate material estimates.
          </p>
        </div>

        {!activeCalculator ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculatorTypes.map((calc) => (
              <Card key={calc.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <calc.icon className={`h-12 w-12 ${calc.color}`} />
                  </div>
                  <CardTitle className="text-lg">{calc.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{calc.description}</p>
                  <Button
                    onClick={() => setActiveCalculator(calc.id)}
                    className="w-full"
                  >
                    Open Calculator
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button
                variant="outline"
                onClick={() => setActiveCalculator(null)}
                className="mb-4"
              >
                ← Back to Calculators
              </Button>
            </div>
            {renderCalculator()}
          </div>
        )}
      </div>
    </section>
  );
};

export default CalculatorSection;
