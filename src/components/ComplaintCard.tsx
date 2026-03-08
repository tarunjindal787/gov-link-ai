import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Complaint, categoryLabels } from '@/data/mockData';
import { StatusBadge, PriorityBadge, SentimentBadge } from '@/components/StatusBadges';
import StatusTracker from '@/components/StatusTracker';
import { MapPin, Clock, User, Building2 } from 'lucide-react';

interface ComplaintCardProps {
  complaint: Complaint;
  expanded?: boolean;
  onClick?: () => void;
}

const ComplaintCard = ({ complaint, expanded = false, onClick }: ComplaintCardProps) => {
  return (
    <Card
      className={`shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer border-l-4 ${
        complaint.priority === 'critical' ? 'border-l-civic-red' :
        complaint.priority === 'high' ? 'border-l-civic-orange' :
        complaint.priority === 'medium' ? 'border-l-civic-yellow' :
        'border-l-civic-green'
      }`}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground font-mono mb-1">{complaint.id}</p>
            <CardTitle className="text-base font-semibold leading-tight">{complaint.title}</CardTitle>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {complaint.sentiment && <SentimentBadge sentiment={complaint.sentiment} />}
            <PriorityBadge priority={complaint.priority} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />{complaint.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />{complaint.createdAt}
          </span>
          <span>{categoryLabels[complaint.category]}</span>
        </div>

        <div className="flex items-center gap-2">
          <StatusBadge status={complaint.status} />
          {complaint.assignedOfficer && (
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <User className="w-3 h-3" />{complaint.assignedOfficer}
            </span>
          )}
          {complaint.department && (
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Building2 className="w-3 h-3" />{complaint.department}
            </span>
          )}
        </div>

        {expanded && (
          <div className="pt-2 space-y-3 animate-fade-in">
            <p className="text-sm text-muted-foreground">{complaint.description}</p>
            <StatusTracker currentStatus={complaint.status} />
            {complaint.estimatedResolution && (
              <p className="text-xs text-muted-foreground">
                Estimated Resolution: <span className="font-medium text-foreground">{complaint.estimatedResolution}</span>
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ComplaintCard;
