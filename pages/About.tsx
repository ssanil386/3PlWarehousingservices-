import React from 'react';
import { useSite } from '../context/SiteContext';
import { Shield, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const { config } = useSite();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About {config.name}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Redefining logistics in India through innovation, integrity, and operational excellence.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
             <img 
               src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80" 
               alt="Warehouse Team" 
               className="rounded-2xl shadow-xl"
             />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Founded in 2010, {config.name} began with a single warehouse in Mumbai. Today, we have grown into one of India's most trusted 3PL providers, managing millions of square feet of storage space across the nation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our mission is simple: to help businesses scale by taking the complexity out of logistics. We leverage state-of-the-art technology and a deep understanding of the Indian market to deliver solutions that are both efficient and cost-effective.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-8 border border-slate-100 rounded-xl text-center bg-slate-50">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-orange-500">
               <Target className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold mb-3">Precision</h3>
             <p className="text-slate-600">Accuracy in inventory and delivery is our hallmark. We don't just move goods; we manage data.</p>
           </div>
           <div className="p-8 border border-slate-100 rounded-xl text-center bg-slate-50">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-orange-500">
               <Shield className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold mb-3">Reliability</h3>
             <p className="text-slate-600">Your goods are safe with us. Our facilities adhere to global safety and security standards.</p>
           </div>
           <div className="p-8 border border-slate-100 rounded-xl text-center bg-slate-50">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-orange-500">
               <Users className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold mb-3">Customer First</h3>
             <p className="text-slate-600">We build partnerships, not just client lists. Our support team is dedicated to your success.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;