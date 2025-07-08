
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CubicMetersCalculator = () => {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [thickness, setThickness] = useState<number>(0);
  const [concreteGrade, setConcreteGrade] = useState<string>("");
  const [result, setResult] = useState<{ 
    volume: number; 
    sand: number; 
    gravel: number; 
    cost: number;
  } | null>(null);

  const concreteRatios = {
    "1:2:4": { cement: 1, sand: 2, gravel: 4 }, // M15
    "1:1.5:3": { cement: 1, sand: 1.5, gravel: 3 }, // M20
    "1:1:2": { cement: 1, sand: 1, gravel: 2 }, // M25
  };

  const calculateAggregates = () => {
    if (!concreteGrade || length <= 0 || width <= 0 || thickness <= 0) return;

    const volume = length * width * (thickness / 100); // Convert cm to meters
    const ratio = concreteRatios[concreteGrade as keyof typeof concreteRatios];
    
    const totalParts = ratio.cement + ratio.sand + ratio.gravel;
    const sandVolume = (volume * ratio.sand) / totalParts;
    const gravelVolume = (volume * ratio.gravel) / totalParts;
    
    // Add 20% extra for compaction and waste
    const sandNeeded = sandVolume * 1.2;
    const gravelNeeded = gravelVolume * 1.2;
    
    const cost = (sandNeeded + gravelNeeded) * 57500; // TZS per cubic meter

    setResult({ 
      volume, 
      sand: sandNeeded, 
      gravel: gravelNeeded, 
      cost 
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Aggregates Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="concrete-grade">Concrete Mix Ratio</Label>
              <Select value={concreteGrade} onValueChange={setConcreteGrade}>
                <SelectTrigger>
                  <SelectValue placeholder="Select concrete grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1:2:4">1:2:4 (M15) - General use</SelectItem>
                  <SelectItem value="1:1.5:3">1:1.5:3 (M20) - Residential</SelectItem>
                  <SelectItem value="1:1:2">1:1:2 (M25) - Structural</SelectItem>
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
              <Label htmlFor="thickness">Thickness (cm)</Label>
              <Input
                id="thickness"
                type="number"
                value={thickness || ""}
                onChange={(e) => setThickness(Number(e.target.value))}
                placeholder="Enter thickness in cm"
              />
            </div>

            <Button onClick={calculateAggregates} className="w-full">
              Calculate Aggregates
            </Button>
          </div>

          <div className="space-y-4">
            {result && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Calculation Results</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Concrete Volume:</span>
                    <span className="font-medium">{result.volume.toFixed(2)} m³</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Sand Required:</span>
                    <span className="font-medium">{result.sand.toFixed(2)} m³</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Gravel Required:</span>
                    <span className="font-medium">{result.gravel.toFixed(2)} m³</span>
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
                    *Includes 20% extra for compaction and waste. Cement cost calculated separately.
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

export default CubicMetersCalculator;
