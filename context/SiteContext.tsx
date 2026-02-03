import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteData, SiteConfig, Service, BlogPost, Location } from '../types';

const defaultData: SiteData = {
  config: {
    name: '3PL Warehousing Services',
    tagline: 'Your Trusted Logistics Partner in India',
    contactEmail: '', // Removed email
    contactPhone: '022 31612976',
    primaryColor: '#1e293b', // Slate 800
    accentColor: '#f97316', // Orange 500
  },
  services: [
    {
      id: '1',
      title: 'E-commerce Fulfillment',
      description: 'End-to-end fulfillment solutions tailored for Indian marketplaces like Flipkart and Amazon.',
      icon: 'Package',
      image: 'https://picsum.photos/800/600?random=1',
    },
    {
      id: '2',
      title: 'Cold Chain Storage',
      description: 'Temperature-controlled warehousing for pharmaceuticals and perishables.',
      icon: 'Thermometer',
      image: 'https://picsum.photos/800/600?random=2',
    },
    {
      id: '3',
      title: 'Last-Mile Delivery',
      description: 'Optimized routing and delivery network covering Tier 1, 2, and 3 cities.',
      icon: 'Truck',
      image: 'https://picsum.photos/800/600?random=3',
    },
  ],
  posts: [
    {
      id: '1',
      title: 'The Future of Warehousing in India',
      summary: 'Exploring how automation and AI are transforming the logistics landscape in 2024.',
      content: 'Full content would go here...',
      author: 'Rajesh Kumar',
      date: '2023-10-15',
      image: 'https://picsum.photos/800/400?random=4',
    },
    {
      id: '2',
      title: 'GST Impact on Logistics',
      summary: 'Understanding the benefits of the unified tax regime for interstate warehousing.',
      content: 'Full content...',
      author: 'Priya Singh',
      date: '2023-11-02',
      image: 'https://picsum.photos/800/400?random=5',
    },
  ],
  locations: [
    {
      id: '1',
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Bhiwandi Logistics Park, Mumbai - Nashik Expressway',
      capacity: '50,000 sq ft',
      type: 'Distribution Center',
      coordinates: { lat: 19.0760, lng: 72.8777 }
    },
    {
      id: '2',
      city: 'Gurugram',
      state: 'Haryana',
      address: 'Manesar Industrial Area, Sector 8',
      capacity: '35,000 sq ft',
      type: 'Fulfillment Center',
      coordinates: { lat: 28.4595, lng: 77.0266 }
    },
    {
      id: '3',
      city: 'Bangalore',
      state: 'Karnataka',
      address: 'Nelamangala, Tumkur Road',
      capacity: '40,000 sq ft',
      type: 'Cold Storage',
      coordinates: { lat: 12.9716, lng: 77.5946 }
    }
  ]
};

interface SiteContextType extends SiteData {
  updateConfig: (config: Partial<SiteConfig>) => void;
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  addService: (service: Service) => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SiteData>(() => {
    const saved = localStorage.getItem('siteData');
    return saved ? JSON.parse(saved) : defaultData;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    localStorage.setItem('siteData', JSON.stringify(data));
  }, [data]);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setData(prev => ({ ...prev, config: { ...prev.config, ...newConfig } }));
  };

  const addPost = (post: BlogPost) => {
    setData(prev => ({ ...prev, posts: [post, ...prev.posts] }));
  };

  const deletePost = (id: string) => {
    setData(prev => ({ ...prev, posts: prev.posts.filter(p => p.id !== id) }));
  };

  const addService = (service: Service) => {
    setData(prev => ({ ...prev, services: [...prev.services, service] }));
  };

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <SiteContext.Provider value={{ ...data, updateConfig, addPost, deletePost, addService, isAuthenticated, login, logout }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSite must be used within a SiteProvider');
  return context;
};