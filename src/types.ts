export interface CareLine {
  id: string;
  line: string;
  badge: string;
  badgeColor?: string;
  title: string;
  description: string;
  bullets: string[];
  accentColor: string;
  detailedSpecs?: {
    overview: string;
    protocols: string[];
    partner: string;
    turnaround: string;
  };
}

export interface CarePool {
  id: string;
  code: string;
  tag: string;
  title: string;
  description: string;
  spotsOpen: number;
  totalSpots: number;
  enrolled: number;
  status: 'open' | 'waitlist';
  badge: string;
  facilitator: string;
  schedule: string;
}

export interface MemberProfile {
  id: string;
  name: string;
  chapter: string;
  role: string;
  leadTitle: string;
  bio: string;
  groupTag: string;
  status: string;
  statusType: 'open' | 'waitlist';
  image: string;
}

export interface DispatchLog {
  id: string;
  code: string;
  conference: string;
  summary: string;
  status: string;
  statusType: 'resolved' | 'approved' | 'active';
  timestamp: string;
}

export interface CoverageTier {
  id: string;
  name: string;
  price: string;
  period: string;
  subtitle: string;
  description: string;
  isPopular?: boolean;
  highlightBadge?: string;
  features: string[];
  ctaText: string;
  ctaVariant: 'outline' | 'solid';
}
