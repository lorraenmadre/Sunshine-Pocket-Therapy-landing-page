import { CareLine, CarePool, MemberProfile, DispatchLog, CoverageTier } from '../types';

export const CARE_LINES: CareLine[] = [
  {
    id: 'line-01',
    line: 'LINE 01',
    badge: '8/8 Cigna Covered',
    title: 'Telemedicine & Mental Performance',
    description: 'Trauma-informed sports psychology and licensed clinical small group therapy through CIGNA insurance (covered in-network, 8 of 8 sessions) supported by Impact Health USA.',
    bullets: [
      'Supported by Impact Health USA',
      'Cross-State Licensure Reciprocity'
    ],
    accentColor: '#d97706',
    detailedSpecs: {
      overview: 'Direct clinical connection to sports-specialized psychologists, marriage/family therapists, and child counselors familiar with pro athlete schedules.',
      protocols: [
        'Confidential 1-on-1 performance and anxiety debriefs',
        'Small group maternal resilience circles (max 12 participants)',
        'Emergency 24-hr post-concussion & acute family stress response'
      ],
      partner: 'Impact Health USA & Cigna Behavioral Health Network',
      turnaround: 'Immediate intake, first session within 48 hours'
    }
  },
  {
    id: 'line-02',
    line: 'LINE 02',
    badge: 'Zero Balance Billing',
    title: 'Insurance & Claims Advocacy',
    description: 'White-glove liaison for Cigna Third-Party Administrators. We navigate pre-authorizations, trade policy bridging, out-of-pocket appeals, and unexpected clinic bills.',
    bullets: [
      '$0 Surprise Bill Mediation Guarantee',
      'Post-Trade COBRA & TPA Gap Bridging'
    ],
    accentColor: '#ca8a04',
    detailedSpecs: {
      overview: 'Dedicated insurance concierges who handle bill disputes, in-network appeals, and uninterrupted coverage when franchises trade or waive contracts mid-year.',
      protocols: [
        'Immediate audit of hospital and pediatric therapy balances',
        'Formal TPA dispute letters executed under NFL collective agreements',
        'Single-point COBRA activation and reimbursement management'
      ],
      partner: 'National Claims Advocacy Group & Cigna TPA Taskforce',
      turnaround: 'Average resolution 4.2 business days'
    }
  },
  {
    id: 'line-03',
    line: 'LINE 03',
    badge: 'WealthCounsel Powered',
    title: 'Legal, Trust & Family Defense',
    description: 'Safeguard domestic sovereignty with WealthCounsel legal drafting: up to 4 drafts per year covering educational trusts, domestic asset defense, lease riders, and minor custody powers.',
    bullets: [
      '4 WealthCounsel Drafts / Year',
      'Rush Lease Termination & Travel Powers'
    ],
    accentColor: '#9333ea',
    detailedSpecs: {
      overview: 'Institutional legal infrastructure pre-negotiated to protect families from predatory commercial leases, relocation disputes, and sudden custody jurisdictional issues.',
      protocols: [
        'Interstate minor power of attorney and travel authorizations',
        'Standard NFL relocation lease termination riders',
        'Special needs trusts & child educational asset shielding'
      ],
      partner: 'WealthCounsel National Attorney Network',
      turnaround: 'Standard drafts delivered within 72 hours'
    }
  },
  {
    id: 'line-04',
    line: 'LINE 04',
    badge: '48-Hr Route',
    title: 'Travel & Relocation Logistics',
    description: 'Turnkey move management with sensory-friendly flight protocols for neurodivergent children, expedited cross-country dispatch, and neighborhood school playbooks.',
    bullets: [
      'Emergency Interstate Relocation Fleet',
      'Sensory Travel Kits & Accommodations'
    ],
    accentColor: '#0891b2',
    detailedSpecs: {
      overview: 'End-to-end relocation dispatch designed around the traumatic pace of mid-season NFL trades, safeguarding children and family stability.',
      protocols: [
        'Direct school record transfer and emergency IEP continuity',
        'Sensory-regulated transit booking for neurodivergent family members',
        'Temporary vetted housing coordination with sensory calm suites'
      ],
      partner: 'NFWA Sovereign Logistics Taskforce',
      turnaround: 'Activated within 60 minutes of official trade wire'
    }
  },
  {
    id: 'line-05',
    line: 'LINE 05',
    badge: 'Google Vault SSO',
    title: 'Technology & Data Sovereignty',
    description: 'Military-grade 256-bit AES encryption with Google integrations for zero-knowledge privacy, SSO authorizations, and sequestered calendar and family custody files.',
    bullets: [
      'Google Privacy Cloud & Zero Footprint',
      'Zero Franchise Visibility Guarantee'
    ],
    accentColor: '#d97706',
    detailedSpecs: {
      overview: 'Air-gapped data architecture guaranteeing that team physicians, head coaches, sports agents, and club executives have absolute zero access to personal therapy or family files.',
      protocols: [
        'Client-side zero-knowledge encryption before cloud storage',
        'Ephemeral meeting notes that self-purge after clinical confirmation',
        'Independent multi-factor single sign-on sequestered from club accounts'
      ],
      partner: 'Google Cloud Healthcare API & Zero-Knowledge Architecture',
      turnaround: 'Continuous 100% sequestration guaranteed'
    }
  },
  {
    id: 'line-06',
    line: 'LINE 06',
    badge: 'Fiduciary',
    title: 'Financial Continuity & Growth',
    description: 'Strategic bridging across contract restructures, offseason cash flows, developmental HSA/FSA optimizers, and vetted fee-only pro athlete advisory vetting.',
    bullets: [
      'HSA/FSA Developmental Optimizers',
      'Fee-Only Pro Sports Advisers Only'
    ],
    accentColor: '#059669',
    detailedSpecs: {
      overview: 'Fiduciary financial alignment safeguarding maternal assets, medical spending accounts, and transition runways across unpredictable player contracts.',
      protocols: [
        'HSA & FSA medical expense maximization for pediatric therapies',
        'Offseason cash-flow cushion calculators for contract restructure years',
        'Vetted non-predatory fee-only wealth planner verification'
      ],
      partner: 'Independent Fiduciary Sports Advisory Board',
      turnaround: 'Annual check-in & quarterly contract review'
    }
  }
];

export const CARE_POOLS: CarePool[] = [
  {
    id: 'pool-a',
    code: 'POOL A • IN SEASON',
    tag: 'IN SEASON',
    badge: '3 SPOTS OPEN',
    title: 'Mid-Season Trade & Relocation',
    description: 'For partners and matriarchs executing immediate franchise moves, changing schools, and establishing new family bases mid-campaign.',
    spotsOpen: 3,
    totalSpots: 12,
    enrolled: 9,
    status: 'open',
    facilitator: 'Dr. Althea Brooks, Licensed Sports Clinical Psychologist',
    schedule: 'Weekly Tuesdays • 1:00 PM EST / 10:00 AM PST'
  },
  {
    id: 'pool-b',
    code: 'POOL B • EARLY YEARS',
    tag: 'EARLY YEARS',
    badge: '2 SPOTS OPEN',
    title: 'New Motherhood & Postpartum',
    description: 'Trauma-informed postpartum support, maternal wellness, infant neurodevelopment, and balancing high-profile spouse travel demands.',
    spotsOpen: 2,
    totalSpots: 12,
    enrolled: 10,
    status: 'open',
    facilitator: 'Monique Vance, LCSW & Perinatal Health Specialist',
    schedule: 'Weekly Thursdays • 2:00 PM EST / 11:00 AM PST'
  },
  {
    id: 'pool-c',
    code: 'POOL C • SPECIALIZED',
    tag: 'SPECIALIZED',
    badge: '1 SPOT OPEN',
    title: 'Pediatric & Neurodivergent Navigation',
    description: 'Co-navigating IEPs, autism therapies, speech pathology, and pediatric specialty advocacy without waiting list resets.',
    spotsOpen: 1,
    totalSpots: 12,
    enrolled: 11,
    status: 'open',
    facilitator: 'Rachel Sterling, MS, BCBA & Special Education Advocate',
    schedule: 'Weekly Wednesdays • 12:00 PM EST / 9:00 AM PST'
  },
  {
    id: 'pool-d',
    code: 'POOL D • ALUMNAE',
    tag: 'ALUMNAE',
    badge: 'WAITLIST ONLY',
    title: 'Post-Career Transition & Identity',
    description: 'Navigating the retirement cliff, offseason personal launch, cognitive wellness, and family restructuring after the league.',
    spotsOpen: 0,
    totalSpots: 12,
    enrolled: 12,
    status: 'waitlist',
    facilitator: 'Dr. Cheryl Hastings, Former NFL Family Liaison & PsyD',
    schedule: 'Bi-Weekly Mondays • 7:00 PM EST / 4:00 PM PST'
  }
];

export const MEMBER_PROFILES: MemberProfile[] = [
  {
    id: 'maya-vance',
    name: 'Maya Vance',
    chapter: 'Denver Chapter • Active NFL Spouse',
    role: 'Active NFL Spouse',
    leadTitle: 'Cohort Lead: Pediatric & Neurodivergent Navigation.',
    bio: 'Mother of two.',
    groupTag: 'Group A-3',
    status: 'Open (2 Spots)',
    statusType: 'open',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    chapter: 'Tampa Chapter • Alumna Matriarch',
    role: 'Alumna Matriarch',
    leadTitle: 'Cohort Lead: Post-Career Transition & Enterprise Growth.',
    bio: '8-yr veteran family.',
    groupTag: 'Group D-1',
    status: 'Waitlist',
    statusType: 'waitlist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'kendra-washington',
    name: 'Kendra Washington',
    chapter: 'Atlanta Chapter • Active NFL Spouse',
    role: 'Active NFL Spouse',
    leadTitle: 'Cohort Lead: Mid-Season Relocation & Interstate Schooling.',
    bio: '4-franchise trade veteran.',
    groupTag: 'Group B-2',
    status: 'Open (3 Spots)',
    statusType: 'open',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'chloe-morales',
    name: 'Chloe Morales',
    chapter: 'Dallas Chapter • 2nd Year Partner',
    role: '2nd Year Partner',
    leadTitle: 'Cohort Lead: New Motherhood & Postpartum Clinical Huddle.',
    bio: 'Mother to 6-month-old twins.',
    groupTag: 'Group C-4',
    status: 'Open (1 Spot)',
    statusType: 'open',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80'
  }
];

export const DISPATCH_LOGS: DispatchLog[] = [
  {
    id: 'rel-419',
    code: 'RELOCATION #419',
    conference: 'AFC NORTH TO NFC NORTH',
    summary: 'Emergency pediatric neuro-waitlist bridge + lease exit rider executed under WealthCounsel defense.',
    status: 'Resolved in 1.4h',
    statusType: 'resolved',
    timestamp: '18 min ago'
  },
  {
    id: 'clm-803',
    code: 'CLAIMS APPEAL #803',
    conference: 'NFC WEST',
    summary: 'Cigna TPA out-of-network autism provider denial overturned via $0 Surprise Bill Mediation Guarantee.',
    status: 'Cigna Approved',
    statusType: 'approved',
    timestamp: '42 min ago'
  },
  {
    id: 'coh-221',
    code: 'COHORT PLACEMENT #221',
    conference: 'AFC EAST',
    summary: 'Alumna partner admitted to Pool D Post-Career Transition circle; zero franchise visibility confirmed.',
    status: 'Direct Intake Active',
    statusType: 'active',
    timestamp: '1 hour ago'
  }
];

export const COVERAGE_TIERS: CoverageTier[] = [
  {
    id: 'tier-core',
    name: 'CORE ASSOCIATION BENEFIT',
    price: '$0',
    period: '/ with Cigna',
    subtitle: 'Zero Co-Pay • In-Network',
    description: 'Covered 8 of 8 group therapy sessions through Cigna Insurance with licensed clinical directors. Trauma-informed peer cohorts capped at 12 women per circle.',
    features: [
      '8 of 8 Group Therapy Sessions',
      'Licensed Clinical Directors Triage',
      'Sub-2-Hour Coordinator Access'
    ],
    ctaText: 'INCLUDED WITH MEMBERSHIP',
    ctaVariant: 'outline'
  },
  {
    id: 'tier-sprint',
    name: 'TARGETED CARE SPRINT',
    price: '$555',
    period: '/ 14-day sprint',
    subtitle: '1 FREE Sprint Included in Dues',
    highlightBadge: '1 FREE INCLUDED / YEAR',
    isPopular: true,
    description: '2-week, 14-day, 1-deliverable rapid sprint for acute transitions: surgery recovery protocol, relocation school IEP transfer, or expedited Cigna appeal.',
    features: [
      '14-Day Rapid Turnaround',
      '1 Clear Tangible Deliverable',
      'Dedicated Human Coordinator',
      'Surgery, Move, or IEP Focus'
    ],
    ctaText: 'CLAIM YOUR FREE SPRINT',
    ctaVariant: 'solid'
  },
  {
    id: 'tier-family',
    name: 'PRIVATE FAMILY CARE JOURNEY',
    price: '$11,111',
    period: '/ retainer',
    subtitle: '44 Weeks / 22 Sprints Retainer',
    description: 'Full family office design & sovereign care coordination. Comprehensive year-round clinical director oversight, multi-state trusts, and career bridging.',
    features: [
      '22 Modular 14-Day Sprints',
      'Multi-State WealthCounsel Trusts',
      'Dedicated Clinical Director on Call',
      'Full Pediatric Specialty Bridging'
    ],
    ctaText: 'INQUIRE FAMILY OFFICE',
    ctaVariant: 'outline'
  },
  {
    id: 'tier-syndicate',
    name: 'ASSOCIATION & SYNDICATE',
    price: 'Custom',
    period: '/ Charter',
    subtitle: 'Franchise & Syndicate Underwriting',
    description: 'Institutional tier for team syndicates, foundations, and alumnae associations. Group-level zero-knowledge custody and union collective bargaining data integration.',
    features: [
      'Whole-Roster Cohort Provisioning',
      'Executive Council Governance',
      'Bespoke Emergency Crisis Grants'
    ],
    ctaText: 'REQUEST SYNDICATE CHARTER',
    ctaVariant: 'outline'
  }
];

export const POLICY_SHIFTS = [
  { metric: 'Interstate Pediatric Reciprocity', value: '100% Adopted' },
  { metric: 'Post-Career Mental Health Bridging', value: 'Expanded to 5 Yrs' },
  { metric: 'Sensory Travel Allowances for Kids', value: 'Active CBA Clause' },
  { metric: 'Aggregated De-identified Reports', value: '3,420+ Resolved Cases' }
];
