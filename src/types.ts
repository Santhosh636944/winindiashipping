export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  imageUrl: string;
  iconName: string;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  stat?: string;
  statLabel?: string;
}

export interface NetworkPort {
  id: string;
  name: string;
  city: string;
  country: string;
  x: number; // Percent width of map (0-100)
  y: number; // Percent height of map (0-100)
  isHub?: boolean;
}

export interface ShippingRoute {
  id: string;
  from: NetworkPort;
  to: NetworkPort;
  active: boolean;
  progress: number; // For interactive shipping animations
}

export interface TrackingMilestone {
  title: string;
  location: string;
  date: string;
  time: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
}

export interface TrackingDetails {
  id: string;
  status: 'In Transit' | 'Departed Port' | 'Customs Cleared' | 'Port of Loading' | 'Delivered';
  origin: string;
  destination: string;
  vesselName: string;
  voyageNumber: string;
  eta: string;
  cargoType: string;
  weight: string;
  carrier: string;
  milestones: TrackingMilestone[];
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  origin: string;
  destination: string;
  message: string;
}
