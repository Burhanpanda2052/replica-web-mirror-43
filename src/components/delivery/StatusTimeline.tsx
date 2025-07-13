
interface StatusTimelineProps {
  status: "preparing" | "in_transit" | "delivered";
}

const StatusTimeline = ({ status }: StatusTimelineProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${status === "preparing" ? "bg-yellow-500" : "bg-green-500"}`} />
        <span className="text-sm">Order Preparing</span>
      </div>
      <div className="flex-1 h-px bg-gray-200" />
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${status === "in_transit" ? "bg-blue-500" : status === "delivered" ? "bg-green-500" : "bg-gray-300"}`} />
        <span className="text-sm">In Transit</span>
      </div>
      <div className="flex-1 h-px bg-gray-200" />
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${status === "delivered" ? "bg-green-500" : "bg-gray-300"}`} />
        <span className="text-sm">Delivered</span>
      </div>
    </div>
  );
};

export default StatusTimeline;
