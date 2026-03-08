import { useState } from 'react';
import { mockComplaints, categoryLabels, type ComplaintCategory, type ComplaintStatus } from '@/data/mockData';
import ComplaintCard from '@/components/ComplaintCard';
import StatCard from '@/components/StatCard';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FileText, Clock, CheckCircle2, AlertTriangle, Plus, Mic, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const CitizenDashboard = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [dialogOpen, setDialogOpen] = useState(false);

  const userComplaints = mockComplaints;

  const filtered = filterStatus === 'all'
    ? userComplaints
    : userComplaints.filter(c => c.status === filterStatus);

  const activeCount = userComplaints.filter(c => c.status !== 'resolved').length;
  const resolvedCount = userComplaints.filter(c => c.status === 'resolved').length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Complaint submitted successfully!', {
      description: 'Your case ID is CIV-2024-007. You will receive updates.',
    });
    setDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Citizen Dashboard</h1>
            <p className="text-sm text-muted-foreground">Track your complaints & civic issues</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 shadow-civic">
                <Plus className="w-4 h-4" /> New Complaint
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="font-display">File a Complaint</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Complaint title" required />
                <Textarea placeholder="Describe the issue in detail..." rows={3} required />
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {(Object.keys(categoryLabels) as ComplaintCategory[]).map(cat => (
                      <SelectItem key={cat} value={cat}>{categoryLabels[cat]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex gap-2">
                  <Input placeholder="Location" className="flex-1" />
                  <Button type="button" variant="outline" size="icon" title="Auto-detect location">
                    <MapPin className="w-4 h-4" />
                  </Button>
                  <Button type="button" variant="outline" size="icon" title="Voice input">
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
                <Button type="submit" className="w-full shadow-civic">Submit Complaint</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={<FileText className="w-5 h-5 text-primary-foreground" />}
            label="Total Complaints"
            value={userComplaints.length}
          />
          <StatCard
            icon={<Clock className="w-5 h-5 text-primary-foreground" />}
            label="Active Cases"
            value={activeCount}
            trend="2 this week"
            trendUp={false}
          />
          <StatCard
            icon={<CheckCircle2 className="w-5 h-5 text-primary-foreground" />}
            label="Resolved"
            value={resolvedCount}
            trend="1 this month"
            trendUp={true}
          />
          <StatCard
            icon={<AlertTriangle className="w-5 h-5 text-primary-foreground" />}
            label="Avg Resolution"
            value="4.2d"
          />
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {['all', 'filed', 'verified', 'assigned', 'investigation', 'action', 'resolved'].map(s => (
            <Button
              key={s}
              size="sm"
              variant={filterStatus === s ? 'default' : 'outline'}
              onClick={() => setFilterStatus(s)}
              className="whitespace-nowrap"
            >
              {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
            </Button>
          ))}
        </div>

        {/* Complaints list */}
        <div className="space-y-4">
          {filtered.map(complaint => (
            <ComplaintCard
              key={complaint.id}
              complaint={complaint}
              expanded={expandedId === complaint.id}
              onClick={() => setExpandedId(expandedId === complaint.id ? null : complaint.id)}
            />
          ))}
          {filtered.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                No complaints found for this filter.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
