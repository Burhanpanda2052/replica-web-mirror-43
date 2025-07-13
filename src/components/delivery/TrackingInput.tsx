
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TrackingInputProps {
  trackingNumber: string;
  onTrackingNumberChange: (value: string) => void;
  onTrack: () => void;
}

const TrackingInput = ({ trackingNumber, onTrackingNumberChange, onTrack }: TrackingInputProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Enter Tracking Number</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4">
          <div className="flex-1">
            <Label htmlFor="tracking">Order Number</Label>
            <Input
              id="tracking"
              value={trackingNumber}
              onChange={(e) => onTrackingNumberChange(e.target.value)}
              placeholder="e.g., TB2024001"
            />
          </div>
          <div className="flex items-end">
            <Button onClick={onTrack}>
              Track Delivery
            </Button>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-muted-foreground">
          <p><strong>Try these tracking numbers:</strong> TB2024001 (In Transit) or TB2024002 (Preparing)</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackingInput;
