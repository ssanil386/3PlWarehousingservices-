export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Name of the Lucide icon
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export interface Location {
  id: string;
  city: string;
  state: string;
  address: string;
  capacity: string;
  type: 'Distribution Center' | 'Cold Storage' | 'Fulfillment Center';
  coordinates: { lat: number; lng: number };
}

export interface SiteConfig {
  name: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  primaryColor: string; // Hex code
  accentColor: string; // Hex code
}

export interface SiteData {
  config: SiteConfig;
  services: Service[];
  posts: BlogPost[];
  locations: Location[];
}