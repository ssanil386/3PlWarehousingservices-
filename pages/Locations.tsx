import React from 'react';
import { useSite } from '../context/SiteContext';
import { MapPin, Box } from 'lucide-react';

const Locations: React.FC = () => {
  const { locations } = useSite();

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-4">Our Network</h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Strategically located fulfillment centers across key Indian industrial hubs to ensure fastest delivery times.
        </p>

        {/* Mock Map Representation */}
        <div className="bg-slate-200 w-full h-64 md:h-96 rounded-2xl mb-12 flex items-center justify-center relative overflow-hidden shadow-inner">
           <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/India_blank_map.svg/1666px-India_blank_map.svg.png" 
            alt="India Map" 
            className="h-full object-contain opacity-40 mix-blend-multiply" 
           />
           <div className="absolute inset-0 flex items-center justify-center">
             <span className="bg-white/80 px-4 py-2 rounded-lg text-sm font-semibold shadow backdrop-blur-sm">Interactive Map Placeholder</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <div key={loc.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-lg text-slate-900">{loc.city}</h3>
                </div>
                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-full uppercase">
                  {loc.state}
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-4 h-10">{loc.address}</p>
              <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-sm">
                <span className="text-slate-500 flex items-center">
                   <Box className="h-4 w-4 mr-1" /> {loc.capacity}
                </span>
                <span className="text-blue-600 font-medium">{loc.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;