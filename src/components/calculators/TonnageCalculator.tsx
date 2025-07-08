
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TonnageCalculator = () => {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [floors, setFloors] = useState<number>(1);
  const [projectType, setProjectType] = useState<string>("");
  const [result, setResult] = useState<{ tonnage: number; cost: number } | null>(null);

  const steelRates = {
    residential: 0.08, // tons per square meter
    commercial: 0.12,
    industrial: 0.15,
  };

  const calculateTonnage = () => {
    if (!projectType || length <= 0 || width <= 0) return;

    const area = length * width * floors;
    const rate = steelRates[projectType as keyof typeof steelRates] || 0.08;
    const tonnage = area * rate;
    const cost = tonnage * 1495000; // TZS per ton

    setResult({ tonnage, cost });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>Steel & Rebar Calculator</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="project-type">Project Type</Label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential Building</SelectItem>
                  <SelectItem value="commercial">Commercial Building</SelectItem>
                  <SelectItem value="industrial">Industrial Structure</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="length">Length (meters)</Label>
              <Input
                id="length"
                type="number"
                value={length || ""}
                onChange={(e) => setLength(Number(e.target.value))}
                placeholder="Enter length"
              />
            </div>

            <div>
              <Label htmlFor="width">Width (meters)</Label>
              <Input
                id="width"
                type="number"
                value={width || ""}
                onChange={(e) => setWidth(Number(e.target.value))}
                placeholder="Enter width"
              />
            </div>

            <div>
              <Label htmlFor="floors">Number of Floors</Label>
              <Input
                id="floors"
                type="number"
                value={floors || ""}
                onChange={(e) => setFloors(Number(e.target.value))}
                placeholder="Enter number of floors"
                min="1"
              />
            </div>

            <Button onClick={calculateTonnage} className="w-full">
              Calculate Steel Requirement
            </Button>
          </div>

          <div className="space-y-4">
            {result && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Calculation Results</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Area:</span>
                    <span className="font-medium">{(length * width * floors).toLocaleString()} m²</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Steel Required:</span>
                    <span className="font-medium">{result.tonnage.toFixed(2)} tons</span>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Estimated Cost:</span>
                      <span className="text-primary">{result.cost.toLocaleString()} TZS</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-yellow/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    *This is an estimate based on standard construction practices. 
                    Actual requirements may vary based on structural design and local building codes.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TonnageCalculator;
