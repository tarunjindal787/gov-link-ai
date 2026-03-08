import { Shield, FileText, Eye, BarChart3, Bell, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Smart Complaints',
    description: 'File complaints via text, voice, or photo with AI-powered categorization.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Real-Time Tracking',
    description: 'Track your case like a delivery — from filed to resolved.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'AI Analytics',
    description: 'Sentiment analysis, trend detection, and predictive insights.',
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Smart Alerts',
    description: 'Real-time notifications on every case update.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Inter-Agency Collab',
    description: 'Seamless coordination between departments.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure & Private',
    description: 'End-to-end encryption with anonymous reporting option.',
  },
];

const stats = [
  { value: '50K+', label: 'Cases Resolved' },
  { value: '4.2★', label: 'Avg Satisfaction' },
  { value: '3.5 days', label: 'Avg Resolution' },
  { value: '12', label: 'Departments' },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="container py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-sm text-primary font-medium">
              <Shield className="w-4 h-4" />
              AI-Powered Civic Governance
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-foreground">
              Transparency Between{' '}
              <span className="text-gradient-civic">Citizens & Government</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Track every complaint like a delivery. AI-powered insights for faster resolution.
              No more black holes — every case is visible, trackable, and accountable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link to="/citizen">
                <Button size="lg" className="gap-2 shadow-civic">
                  Citizen Portal <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/officer">
                <Button size="lg" variant="outline" className="gap-2">
                  Officer Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-card/50">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-display font-bold text-gradient-civic">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-foreground">How It Works</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            A seamless system connecting citizens with government for transparent, efficient governance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="shadow-card hover:shadow-elevated transition-all duration-300 group">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-xl gradient-civic flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How tracking works */}
      <section className="bg-card/50 border-y border-border py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground">Track Like a Delivery</h2>
            <p className="text-muted-foreground mt-2">Every complaint follows a transparent pipeline</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {['Filed', 'Verified', 'Assigned', 'Investigation', 'Action Taken', 'Resolved'].map((step, i) => (
              <div key={step} className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{step}</span>
                </div>
                {i < 5 && <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-foreground">CivicIQ</span>
          </div>
          <p className="text-sm text-muted-foreground">AI-Powered Civic Governance Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
