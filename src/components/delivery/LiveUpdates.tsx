
interface LiveUpdatesProps {
  status: "preparing" | "in_transit" | "delivered";
}

const LiveUpdates = ({ status }: LiveUpdatesProps) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <div className="flex items-start space-x-3">
        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 animate-pulse" />
        <div>
          <div className="font-medium text-blue-900">Live Updates</div>
          <div className="text-sm text-blue-700">
            {status === "in_transit" && "Your driver will send photo confirmation upon arrival"}
            {status === "preparing" && "You'll receive SMS notification when driver departs"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveUpdates;
