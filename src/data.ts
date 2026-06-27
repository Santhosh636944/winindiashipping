import { ServiceItem, AdvantageItem, NetworkPort, ShippingRoute, TrackingDetails } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'ocean-freight',
    title: 'Ocean Freight Forwarding',
    description: 'Cost-effective global sea freight solutions with flexible container loads and reliable vessel schedules.',
    longDescription: 'WININDIA offers comprehensive ocean freight forwarding services designed to connect India with key global trade lanes. Through strategic alliances with premier shipping lines (MSC, Maersk, CMA CGM), we ensure priority slot allocations and flexible transit choices.',
    features: [
      'Full Container Load (FCL) & Less than Container Load (LCL)',
      'Multi-modal transport integration (Sea-Air-Rail)',
      'Breakbulk, Out-of-Gauge (OOG), and Project Cargo handling',
      'Temperature-controlled reefer cargo logistics',
      'Port-to-Port & Door-to-Door cargo solutions'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Ship'
  },
  {
    id: 'air-freight',
    title: 'Air Freight Services',
    description: 'Expedited global air transport for time-critical, high-value, or sensitive cargo shipments.',
    longDescription: 'When time is of the essence, WININDIA provides rapid, reliable air charter and scheduled cargo options. Our network spans major global airport hubs to guarantee swift delivery times, secure handling, and real-time flight coordination.',
    features: [
      'Priority, Express, and Standard consolidation programs',
      'Full & Part Aircraft Charter solutions',
      'High-value security and temperature-sensitive air cargo',
      'Airport-to-Airport & Door-to-Door deliveries',
      'Dangerous goods (HAZMAT) flight handling'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Plane'
  },
  {
    id: 'container-services',
    title: 'Container & Equipment Services',
    description: 'Expert container leasing, positioning, and bulk dry-van configurations for optimal freight stowage.',
    longDescription: 'We specialize in container provisioning and fleet operations. Whether you require standard 20ft/40ft dry vans, high cubes, flat racks, open tops, or specialized ISO tanks, WININDIA is fully equipped to deploy the correct assets.',
    features: [
      'Standard 20GP, 40GP, and 40HC container supply',
      'Specialized open-top and flat-rack equipment for heavy lift',
      'ISO Tank containers for liquid chemical transportation',
      'Container leasing, inspections, and sea-worthy certifications',
      'Cross-docking and container consolidation nodes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Container'
  },
  {
    id: 'warehousing',
    title: 'Premium Warehousing & Logistics',
    description: 'Secure, state-of-the-art storage, inventory management, and cross-docking distribution networks.',
    longDescription: 'WININDIA offers strategic warehousing solutions positioned near major industrial corridors and marine ports. Backed by modern Warehouse Management Systems (WMS), we provide real-time inventory visibility and localized distributions.',
    features: [
      'Secure bonded and non-bonded warehouse storage facilities',
      'Real-time automated Inventory Management and SKU tracking',
      'Pick & Pack, kitting, sorting, and labeling services',
      'Cross-docking operations to minimize storage transit durations',
      '24/7 CCTV surveillance, fire-suppression, and access controls'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Warehouse'
  },
  {
    id: 'customs-clearance',
    title: 'Customs Brokerage & Clearance',
    description: 'Hassle-free, rapid customs filings, import/export duty consulting, and compliant border clearance.',
    longDescription: 'Navigating customs regulations is a major bottleneck in global trade. WININDIA’s dedicated customs brokerage team manages all paperwork, tariff classifications, and regulatory filings to ensure compliant and seamless gate clearance.',
    features: [
      'Licensed Customs House Agent (CHA) services',
      'Fast-track preparation of Bill of Entry & Shipping Bills',
      'HS Code classification and duty structure consultancies',
      'Import/Export licenses, special economic zone (SEZ) clearances',
      'SAD/Refund processing and customs dispute arbitrations'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    iconName: 'FileCheck'
  }
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    id: 'reliable',
    title: 'Reliable Delivery',
    description: 'With redundant vessel capacity and robust land transport networks, we maintain a 98.6% on-time transit record.',
    iconName: 'Clock',
    stat: '98.6%',
    statLabel: 'On-Time Arrival Rate'
  },
  {
    id: 'secure',
    title: 'Secure Cargo Handling',
    description: 'Every container is checked, sealed, and continuously monitored. We employ advanced tracking to ensure cargo integrity.',
    iconName: 'ShieldCheck',
    stat: 'Zero',
    statLabel: 'Major Cargo Loss Incidents'
  },
  {
    id: 'network',
    title: 'Global Network',
    description: 'Spanning 150+ ports in all major oceans, our connections enable direct shipping lanes and efficient route planning.',
    iconName: 'Globe',
    stat: '150+',
    statLabel: 'Global Port Connections'
  },
  {
    id: 'support',
    title: '24/7 Premium Support',
    description: 'Direct human communication channels. Our elite operational team is on standby 24 hours a day to resolve issues.',
    iconName: 'Headphones',
    stat: '24/7',
    statLabel: 'Operational Assistance'
  }
];

// Map positioning in percentage coordinates (W: 100, H: 100 relative to map bounding box)
export const PORTS: { [id: string]: NetworkPort } = {
  chennai: { id: 'chennai', name: 'Port of Chennai', city: 'Chennai', country: 'India', x: 72.0, y: 58.5, isHub: true },
  rotterdam: { id: 'rotterdam', name: 'Port of Rotterdam', city: 'Rotterdam', country: 'Netherlands', x: 48.0, y: 32.0 },
  singapore: { id: 'singapore', name: 'Port of Singapore', city: 'Singapore', country: 'Singapore', x: 78.5, y: 64.5, isHub: true },
  shanghai: { id: 'shanghai', name: 'Port of Shanghai', city: 'Shanghai', country: 'China', x: 82.5, y: 48.0 },
  newyork: { id: 'newyork', name: 'Port of NY & NJ', city: 'New York', country: 'United States', x: 28.0, y: 36.5 },
  dubai: { id: 'dubai', name: 'Port of Jebel Ali', city: 'Dubai', country: 'United Arab Emirates', x: 64.5, y: 48.5 }
};

export const ROUTES: ShippingRoute[] = [
  { id: 'r1', from: PORTS.chennai, to: PORTS.rotterdam, active: true, progress: 45 },
  { id: 'r2', from: PORTS.chennai, to: PORTS.singapore, active: true, progress: 75 },
  { id: 'r3', from: PORTS.chennai, to: PORTS.dubai, active: true, progress: 20 },
  { id: 'r4', from: PORTS.singapore, to: PORTS.shanghai, active: true, progress: 90 },
  { id: 'r5', from: PORTS.shanghai, to: PORTS.newyork, active: true, progress: 60 }
];

export const TRACKING_DATABASE: { [id: string]: TrackingDetails } = {
  'WIN-8940-IND': {
    id: 'WIN-8940-IND',
    status: 'In Transit',
    origin: 'Port of Chennai, India (INMAA)',
    destination: 'Port of Rotterdam, Netherlands (NLRTM)',
    vesselName: 'WININDIA SOVEREIGN',
    voyageNumber: 'WN-2026-08E',
    eta: '2026-07-12',
    cargoType: '40ft High Cube Container (General Cargo)',
    weight: '24,500 kg',
    carrier: 'WININDIA SHIPPING',
    milestones: [
      {
        title: 'Loaded on Vessel',
        location: 'Port of Chennai (INMAA)',
        date: '2026-06-24',
        time: '14:30',
        status: 'completed',
        description: 'Container sealed and loaded aboard WININDIA SOVEREIGN.'
      },
      {
        title: 'Customs Export Cleared',
        location: 'Tiruvottiyur Customs House, Chennai',
        date: '2026-06-23',
        time: '11:00',
        status: 'completed',
        description: 'Export clearance customs inspection approved and certified.'
      },
      {
        title: 'Container Gated In',
        location: 'Chennai Marine Terminal',
        date: '2026-06-22',
        time: '09:15',
        status: 'completed',
        description: 'Cargo arrived at terminal gates and underwent scaling/inspection.'
      },
      {
        title: 'Departed Port',
        location: 'Indian Ocean Transit',
        date: '2026-06-25',
        time: '04:00',
        status: 'current',
        description: 'Vessel holding speed of 21 knots in international waters.'
      },
      {
        title: 'Suez Canal Transit',
        location: 'Port Said, Egypt',
        date: '2026-07-04',
        time: 'Estimated',
        status: 'upcoming',
        description: 'Scheduled transit corridor arrival and passage verification.'
      },
      {
        title: 'Arrived at Destination',
        location: 'Port of Rotterdam, Netherlands',
        date: '2026-07-12',
        time: 'Estimated',
        status: 'upcoming',
        description: 'Unloading operations, import clearance and terminal release.'
      }
    ]
  },
  'WIN-6369-DBI': {
    id: 'WIN-6369-DBI',
    status: 'Customs Cleared',
    origin: 'Port of Chennai, India (INMAA)',
    destination: 'Port of Jebel Ali, Dubai (AEJEA)',
    vesselName: 'WININDIA MONARCH',
    voyageNumber: 'WN-2026-11A',
    eta: '2026-06-28',
    cargoType: '20ft General Purpose Container (Auto Components)',
    weight: '12,800 kg',
    carrier: 'WININDIA SHIPPING',
    milestones: [
      {
        title: 'Loaded on Vessel',
        location: 'Port of Chennai (INMAA)',
        date: '2026-06-18',
        time: '16:40',
        status: 'completed',
        description: 'Container secured and loaded aboard WININDIA MONARCH.'
      },
      {
        title: 'Vessel Arrived at Port',
        location: 'Jebel Ali Marine Terminal, Dubai',
        date: '2026-06-25',
        time: '19:30',
        status: 'completed',
        description: 'Vessel safely docked at Terminal 2 Berth.'
      },
      {
        title: 'Customs Import Clearance',
        location: 'Jebel Ali Port Customs Brokerage',
        date: '2026-06-26',
        time: '10:15',
        status: 'current',
        description: 'Import duty paid, paper inspection successfully cleared. Awaiting gate-out release.'
      },
      {
        title: 'Final Delivery',
        location: 'Dubai Logistics District Warehouse',
        date: '2026-06-28',
        time: 'Estimated',
        status: 'upcoming',
        description: 'De-consolidation and inland truck delivery to client premises.'
      }
    ]
  },
  'WIN-1022-NYC': {
    id: 'WIN-1022-NYC',
    status: 'Delivered',
    origin: 'Port of Singapore (SGSIN)',
    destination: 'Port of NY & NJ, USA (USNYC)',
    vesselName: 'PACIFIC HORIZON',
    voyageNumber: 'PH-482-W',
    eta: '2026-06-22',
    cargoType: '40ft Refrigerated Container (Pharmaceuticals)',
    weight: '18,250 kg',
    carrier: 'PACIFIC CARRIER',
    milestones: [
      {
        title: 'Cargo Dispatched',
        location: 'Singapore Tech Park Warehouse',
        date: '2026-05-28',
        time: '08:00',
        status: 'completed',
        description: 'Temperature logged at -4°C, cargo packed and dispatched.'
      },
      {
        title: 'Vessel Crossing',
        location: 'Pacific Ocean Transit',
        date: '2026-06-10',
        time: '23:00',
        status: 'completed',
        description: 'Mid-ocean transit, refrigeration temperature checked and steady.'
      },
      {
        title: 'Port Arrival',
        location: 'Port of NY & NJ Berth 12',
        date: '2026-06-21',
        time: '06:00',
        status: 'completed',
        description: 'Vessel arrived, container unloaded and connected to terminal power.'
      },
      {
        title: 'Delivered',
        location: 'New York Central Storage Depot',
        date: '2026-06-22',
        time: '14:30',
        status: 'completed',
        description: 'Cargo received and signed off in perfect condition.'
      }
    ]
  }
};
