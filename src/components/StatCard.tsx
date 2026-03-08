import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

const StatCard = ({ icon, label, value, trend, trendUp, className = '' }: StatCardProps) => {
  return (
    <Card className={`shadow-card hover:shadow-elevated transition-all duration-300 ${className}`}>
      <CardContent className="p-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl gradient-civic flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-sm text-muted-foreground truncate">{label}</p>
          <p className="text-2xl font-display font-bold text-foreground">{value}</p>
          {trend && (
            <p className={`text-xs font-medium ${trendUp ? 'text-civic-green' : 'text-civic-red'}`}>
              {trendUp ? '↑' : '↓'} {trend}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
