import { Badge } from '@/components/ui/badge';
import { ComplaintStatus, SentimentType } from '@/data/mockData';

const statusStyles: Record<ComplaintStatus, string> = {
  filed: 'bg-status-filed/10 text-status-filed border-status-filed/20',
  verified: 'bg-status-verified/10 text-status-verified border-status-verified/20',
  assigned: 'bg-status-assigned/10 text-status-assigned border-status-assigned/20',
  investigation: 'bg-status-investigation/10 text-status-investigation border-status-investigation/20',
  action: 'bg-status-action/10 text-status-action border-status-action/20',
  resolved: 'bg-status-resolved/10 text-status-resolved border-status-resolved/20',
};

const sentimentEmoji: Record<SentimentType, string> = {
  positive: '🙂',
  neutral: '😐',
  frustrated: '😡',
  urgent: '🚨',
};

export function StatusBadge({ status }: { status: ComplaintStatus }) {
  return (
    <Badge variant="outline" className={`${statusStyles[status]} font-medium text-xs`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}

export function SentimentBadge({ sentiment }: { sentiment: SentimentType }) {
  return (
    <span className="text-sm" title={sentiment}>
      {sentimentEmoji[sentiment]}
    </span>
  );
}

export function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    low: 'bg-civic-green/10 text-civic-green border-civic-green/20',
    medium: 'bg-civic-yellow/10 text-civic-yellow border-civic-yellow/20',
    high: 'bg-civic-orange/10 text-civic-orange border-civic-orange/20',
    critical: 'bg-civic-red/10 text-civic-red border-civic-red/20',
  };
  return (
    <Badge variant="outline" className={`${styles[priority] || ''} font-medium text-xs`}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </Badge>
  );
}
