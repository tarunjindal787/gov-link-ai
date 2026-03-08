import { useState } from 'react';
import { mockComplaints, officerStats, trendData, categoryDistribution } from '@/data/mockData';
import ComplaintCard from '@/components/ComplaintCard';
import StatCard from '@/components/StatCard';
import Navbar from '@/components/Navbar';
import { StatusBadge, PriorityBadge } from '@/components/StatusBadges';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FileText, CheckCircle2, Clock, Star, AlertTriangle, TrendingUp, Users, Brain } from 'lucide-react';

const aiInsights = [
  { icon: '💧', text: 'Ward 12 shows a 35% increase in water complaints this week.' },
  { icon: '📈', text: 'Cyber fraud reports have doubled compared to last month.' },
  { icon: '🚨', text: '3 urgent cases need immediate attention in Sector 5.' },
  { icon: '⚡', text: 'Electricity complaints peak between 6-9 PM daily.' },
];

const OfficerDashboard = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Officer Command Center</h1>
          <p className="text-sm text-muted-foreground">AI-powered case management & analytics</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard icon={<FileText className="w-5 h-5 text-primary-foreground" />} label="Total Cases" value={officerStats.totalCases} />
          <StatCard icon={<CheckCircle2 className="w-5 h-5 text-primary-foreground" />} label="Resolved" value={officerStats.resolvedThisMonth} trend="+12%" trendUp={true} />
          <StatCard icon={<Clock className="w-5 h-5 text-primary-foreground" />} label="Avg Days" value={officerStats.avgResolutionDays} trend="-0.5d" trendUp={true} />
          <StatCard icon={<Star className="w-5 h-5 text-primary-foreground" />} label="Satisfaction" value={`${officerStats.citizenSatisfaction}★`} />
          <StatCard icon={<AlertTriangle className="w-5 h-5 text-primary-foreground" />} label="Pending" value={officerStats.pendingCases} />
          <StatCard icon={<TrendingUp className="w-5 h-5 text-primary-foreground" />} label="Urgent" value={officerStats.urgentCases} trend="2 new" trendUp={false} />
        </div>

        <Tabs defaultValue="cases" className="space-y-4">
          <TabsList>
            <TabsTrigger value="cases">Cases</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="ai">AI Insights</TabsTrigger>
          </TabsList>

          {/* Cases tab */}
          <TabsContent value="cases" className="space-y-4">
            {mockComplaints.map(complaint => (
              <ComplaintCard
                key={complaint.id}
                complaint={complaint}
                expanded={expandedId === complaint.id}
                onClick={() => setExpandedId(expandedId === complaint.id ? null : complaint.id)}
              />
            ))}
          </TabsContent>

          {/* Analytics tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-display text-base">Complaints vs Resolved</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Bar dataKey="complaints" fill="hsl(var(--civic-blue))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="resolved" fill="hsl(var(--civic-green))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-display text-base">Category Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={categoryDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {categoryDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {categoryDistribution.map(cat => (
                      <div key={cat.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                        {cat.name} ({cat.value}%)
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI Insights tab */}
          <TabsContent value="ai" className="space-y-4">
            <Card className="shadow-card border-primary/20">
              <CardHeader>
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Intelligence Report
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {aiInsights.map((insight, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                    <span className="text-xl">{insight.icon}</span>
                    <p className="text-sm text-foreground">{insight.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-display text-base">Sentiment Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { emoji: '🙂', label: 'Positive', value: '32%', color: 'text-civic-green' },
                    { emoji: '😐', label: 'Neutral', value: '28%', color: 'text-civic-yellow' },
                    { emoji: '😡', label: 'Frustrated', value: '25%', color: 'text-civic-orange' },
                    { emoji: '🚨', label: 'Urgent', value: '15%', color: 'text-civic-red' },
                  ].map(item => (
                    <div key={item.label} className="text-center p-4 rounded-lg bg-secondary/50">
                      <span className="text-3xl">{item.emoji}</span>
                      <p className={`text-xl font-bold font-display mt-1 ${item.color}`}>{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OfficerDashboard;
