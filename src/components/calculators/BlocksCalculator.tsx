
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BlocksCalculator = () => {
  const [wallLength, setWallLength] = useState<number>(0);
  const [wallHeight, setWallHeight] = useState<number>(0);
  const [blockSize, setBlockSize] = useState<string>("");
  const [openings, setOpenings] = useState<number>(0);
  const [result, setResult] = useState<{ blocks: number; cost: number } | null>(null);

  const blockSizes = {
    "6inch": { length: 0.4, height: 0.2, area: 0.08 }, // 40cm x 20cm
    "8inch": { length: 0.4, height: 0.2, area: 0.08 }, // Same dimensions, different thickness
    "9inch": { length: 0.45, height: 0.225, area: 0.101 }, // 45cm x 22.5cm
  };

  const calculateBlocks = () => {
    if (!blockSize || wallLength <= 0 || wallHeight <= 0) return;

    const wallArea = wallLength * wallHeight;
    const openingsArea = openings * 2; // Average 2m² per opening (door/window)
    const netArea = wallArea - openingsArea;
    
    const blockArea = blockSizes[blockSize as keyof typeof blockSizes].area;
    const blocksNeeded = Math.ceil(netArea / blockArea);
    const wasteAllowance = Math.ceil(blocksNeeded * 0.05); // 5% waste
    const totalBlocks = blocksNeeded + wasteAllowance;
    const cost = totalBlocks * 1150; // TZS per block

    setResult({ blocks: totalBlocks, cost });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Building Blocks Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="block-size">Block Size</Label>
              <Select value={blockSize} onValueChange={setBlockSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select block size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6inch">6 inch (40cm x 20cm)</SelectItem>
                  <SelectItem value="8inch">8 inch (40cm x 20cm)</SelectItem>
                  <SelectItem value="9inch">9 inch (45cm x 22.5cm)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="wall-length">Total Wall Length (meters)</Label>
              <Input
                id="wall-length"
                type="number"
                value={wallLength || ""}
                onChange={(e) => setWallLength(Number(e.target.value))}
                placeholder="Enter total wall length"
              />
            </div>

            <div>
              <Label htmlFor="wall-height">Wall Height (meters)</Label>
              <Input
                id="wall-height"
                type="number"
                value={wallHeight || ""}
                onChange={(e) => setWallHeight(Number(e.target.value))}
                placeholder="Enter wall height"
              />
            </div>

            <div>
              <Label htmlFor="openings">Number of Doors/Windows</Label>
              <Input
                id="openings"
                type="number"
                value={openings || ""}
                onChange={(e) => setOpenings(Number(e.target.value))}
                placeholder="Enter number of openings"
                min="0"
              />
            </div>

            <Button onClick={calculateBlocks} className="w-full">
              Calculate Blocks Needed
            </Button>
          </div>

          <div className="space-y-4">
            {result && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Calculation Results</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Wall Area:</span>
                    <span className="font-medium">{(wallLength * wallHeight).toFixed(1)} m²</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Openings Deduction:</span>
                    <span className="font-medium">{(openings * 2).toFixed(1)} m²</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Blocks Required:</span>
                    <span className="font-medium">{result.blocks.toLocaleString()} blocks</span>
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
                    *Includes 5% waste allowance. Consider mortar and labor costs separately.
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

export default BlocksCalculator;
