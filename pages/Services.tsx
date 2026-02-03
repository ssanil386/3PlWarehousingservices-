import React from 'react';
import { useSite } from '../context/SiteContext';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const { services } = useSite();

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Logistics Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            From storage to shipping, we offer end-to-end supply chain solutions tailored for the diverse Indian market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
              <div className="h-56 overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-white text-2xl font-bold">{service.title}</h3>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 mb-6">
                  {['Real-time Tracking', 'Cost Optimized', '24/7 Support'].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                  Request Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;