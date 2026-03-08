import { ComplaintStatus, statusFlow, statusLabels } from '@/data/mockData';
import { Check } from 'lucide-react';

interface StatusTrackerProps {
  currentStatus: ComplaintStatus;
}

const statusColors: Record<ComplaintStatus, string> = {
  filed: 'bg-status-filed',
  verified: 'bg-status-verified',
  assigned: 'bg-status-assigned',
  investigation: 'bg-status-investigation',
  action: 'bg-status-action',
  resolved: 'bg-status-resolved',
};

const StatusTracker = ({ currentStatus }: StatusTrackerProps) => {
  const currentIndex = statusFlow.indexOf(currentStatus);

  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-border" />
        <div
          className="absolute top-5 left-0 h-0.5 gradient-civic transition-all duration-500"
          style={{ width: `${(currentIndex / (statusFlow.length - 1)) * 100}%` }}
        />

        {statusFlow.map((status, index) => {
          const isCompleted = index <= currentIndex;
          const isCurrent = index === currentIndex;

          return (
            <div key={status} className="flex flex-col items-center relative z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  isCompleted
                    ? `${statusColors[status]} border-transparent`
                    : 'bg-card border-border'
                } ${isCurrent ? 'ring-4 ring-primary/20 scale-110' : ''}`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 text-primary-foreground" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium text-center max-w-[70px] ${
                  isCurrent ? 'text-primary font-semibold' : isCompleted ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {statusLabels[status]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusTracker;
