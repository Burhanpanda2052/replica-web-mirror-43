
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SquareMetersCalculator = () => {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [roofType, setRoofType] = useState<string>("");
  const [pitch, setPitch] = useState<number>(30);
  const [result, setResult] = useState<{ area: number; cost: number } | null>(null);

  const roofMultipliers = {
    flat: 1.0,
    gabled: 1.15,
    hipped: 1.2,
    complex: 1.3,
  };

  const calculateRoofing = () => {
    if (!roofType || length <= 0 || width <= 0) return;

    const baseArea = length * width;
    const pitchMultiplier = 1 + (pitch / 100) * 0.5; // Adjust for roof pitch
    const typeMultiplier = roofMultipliers[roofType as keyof typeof roofMultipliers] || 1.0;
    const totalArea = baseArea * pitchMultiplier * typeMultiplier;
    const cost = totalArea * 27600; // TZS per square meter

    setResult({ area: totalArea, cost });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Roofing Materials Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="roof-type">Roof Type</Label>
              <Select value={roofType} onValueChange={setRoofType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select roof type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flat">Flat Roof</SelectItem>
                  <SelectItem value="gabled">Gabled Roof</SelectItem>
                  <SelectItem value="hipped">Hipped Roof</SelectItem>
                  <SelectItem value="complex">Complex Roof</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="length">Building Length (meters)</Label>
              <Input
                id="length"
                type="number"
                value={length || ""}
                onChange={(e) => setLength(Number(e.target.value))}
                placeholder="Enter building length"
              />
            </div>

            <div>
              <Label htmlFor="width">Building Width (meters)</Label>
              <Input
                id="width"
                type="number"
                value={width || ""}
                onChange={(e) => setWidth(Number(e.target.value))}
                placeholder="Enter building width"
              />
            </div>

            <div>
              <Label htmlFor="pitch">Roof Pitch (degrees)</Label>
              <Input
                id="pitch"
                type="number"
                value={pitch || ""}
                onChange={(e) => setPitch(Number(e.target.value))}
                placeholder="Enter roof pitch"
                min="0"
                max="60"
              />
            </div>

            <Button onClick={calculateRoofing} className="w-full">
              Calculate Roofing Area
            </Button>
          </div>

          <div className="space-y-4">
            {result && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Calculation Results</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Base Area:</span>
                    <span className="font-medium">{(length * width).toLocaleString()} m²</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Total Roof Area:</span>
                    <span className="font-medium">{result.area.toFixed(2)} m²</span>
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
                    *Includes 10% waste allowance. Actual requirements may vary based on 
                    roof complexity and installation method.
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

export default SquareMetersCalculator;
