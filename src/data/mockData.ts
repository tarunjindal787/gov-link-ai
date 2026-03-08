export type ComplaintStatus = 'filed' | 'verified' | 'assigned' | 'investigation' | 'action' | 'resolved';

export type ComplaintCategory = 'crime' | 'water' | 'electricity' | 'road' | 'cyber' | 'medical';

export type SentimentType = 'positive' | 'neutral' | 'frustrated' | 'urgent';

export interface Complaint {
  id: string;
  title: string;
  description: string;
  category: ComplaintCategory;
  status: ComplaintStatus;
  location: string;
  createdAt: string;
  updatedAt: string;
  assignedOfficer?: string;
  department?: string;
  estimatedResolution?: string;
  sentiment?: SentimentType;
  rating?: number;
  citizenName: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

export const categoryLabels: Record<ComplaintCategory, string> = {
  crime: '🚓 Crime',
  water: '💧 Water Supply',
  electricity: '⚡ Electricity',
  road: '🛣 Road Damage',
  cyber: '💻 Cyber Fraud',
  medical: '🏥 Medical Emergency',
};

export const statusLabels: Record<ComplaintStatus, string> = {
  filed: 'Filed',
  verified: 'Verified',
  assigned: 'Assigned',
  investigation: 'Investigation',
  action: 'Action Taken',
  resolved: 'Resolved',
};

export const statusFlow: ComplaintStatus[] = ['filed', 'verified', 'assigned', 'investigation', 'action', 'resolved'];

export const mockComplaints: Complaint[] = [
  {
    id: 'CIV-2024-001',
    title: 'Broken water pipeline near Sector 12',
    description: 'Major water leakage from broken pipeline near Sector 12 market. Water has been flowing for 3 days causing road damage.',
    category: 'water',
    status: 'investigation',
    location: 'Sector 12, Market Road',
    createdAt: '2024-03-01',
    updatedAt: '2024-03-05',
    assignedOfficer: 'Inspector R. Kumar',
    department: 'Municipal Corporation',
    estimatedResolution: '2024-03-08',
    sentiment: 'frustrated',
    citizenName: 'Amit Sharma',
    priority: 'high',
  },
  {
    id: 'CIV-2024-002',
    title: 'Streetlights not working on MG Road',
    description: 'All streetlights on MG Road from junction 5 to 8 have been off for a week.',
    category: 'electricity',
    status: 'assigned',
    location: 'MG Road, Junction 5-8',
    createdAt: '2024-03-02',
    updatedAt: '2024-03-04',
    assignedOfficer: 'Officer S. Patel',
    department: 'Electricity Board',
    estimatedResolution: '2024-03-07',
    sentiment: 'neutral',
    citizenName: 'Priya Nair',
    priority: 'medium',
  },
  {
    id: 'CIV-2024-003',
    title: 'Online banking fraud complaint',
    description: 'Received phishing call and lost ₹50,000 from bank account. Need immediate investigation.',
    category: 'cyber',
    status: 'verified',
    location: 'Koramangala, 4th Block',
    createdAt: '2024-03-03',
    updatedAt: '2024-03-04',
    assignedOfficer: 'Cyber Inspector V. Reddy',
    department: 'Cybercrime Unit',
    estimatedResolution: '2024-03-15',
    sentiment: 'urgent',
    citizenName: 'Ravi Menon',
    priority: 'critical',
  },
  {
    id: 'CIV-2024-004',
    title: 'Large pothole on NH-44',
    description: 'Dangerous pothole causing accidents near toll plaza. Multiple vehicles damaged.',
    category: 'road',
    status: 'action',
    location: 'NH-44, KM 245',
    createdAt: '2024-02-28',
    updatedAt: '2024-03-05',
    assignedOfficer: 'Engineer M. Joshi',
    department: 'Highway Authority',
    estimatedResolution: '2024-03-06',
    sentiment: 'positive',
    citizenName: 'Deepak Verma',
    priority: 'high',
  },
  {
    id: 'CIV-2024-005',
    title: 'Garbage not collected for 2 weeks',
    description: 'Garbage has not been collected in our colony for the past 2 weeks. Health hazard for residents.',
    category: 'medical',
    status: 'resolved',
    location: 'Whitefield, Phase 2',
    createdAt: '2024-02-20',
    updatedAt: '2024-03-01',
    assignedOfficer: 'Sanitation Supervisor K. Das',
    department: 'Municipal Corporation',
    rating: 4,
    sentiment: 'positive',
    citizenName: 'Sunita Iyer',
    priority: 'medium',
  },
  {
    id: 'CIV-2024-006',
    title: 'Chain snatching incident',
    description: 'Chain snatching by two men on bike near bus stand at 7pm.',
    category: 'crime',
    status: 'filed',
    location: 'Majestic Bus Stand',
    createdAt: '2024-03-05',
    updatedAt: '2024-03-05',
    citizenName: 'Lakshmi Devi',
    priority: 'high',
    sentiment: 'urgent',
  },
];

export const officerStats = {
  totalCases: 156,
  resolvedThisMonth: 42,
  avgResolutionDays: 4.2,
  citizenSatisfaction: 4.1,
  pendingCases: 23,
  urgentCases: 5,
};

export const trendData = [
  { month: 'Jan', complaints: 120, resolved: 95 },
  { month: 'Feb', complaints: 145, resolved: 128 },
  { month: 'Mar', complaints: 156, resolved: 130 },
  { month: 'Apr', complaints: 110, resolved: 105 },
  { month: 'May', complaints: 165, resolved: 140 },
  { month: 'Jun', complaints: 135, resolved: 130 },
];

export const categoryDistribution = [
  { name: 'Water Supply', value: 28, color: 'hsl(199, 89%, 60%)' },
  { name: 'Road Damage', value: 22, color: 'hsl(25, 95%, 53%)' },
  { name: 'Crime', value: 18, color: 'hsl(0, 84%, 60%)' },
  { name: 'Electricity', value: 15, color: 'hsl(45, 93%, 47%)' },
  { name: 'Cyber Fraud', value: 10, color: 'hsl(271, 81%, 56%)' },
  { name: 'Medical', value: 7, color: 'hsl(142, 71%, 45%)' },
];
