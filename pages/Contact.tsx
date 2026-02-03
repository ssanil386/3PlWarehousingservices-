import React from 'react';
import { useSite } from '../context/SiteContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { config } = useSite();

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready to optimize your supply chain? Reach out to our team of logistics experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-orange-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Headquarters</h3>
                  <p className="text-slate-600">A507, Belantra, Karade<br />Panvel - 410207</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                 <div className="bg-white p-3 rounded-lg shadow-sm text-orange-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600">{config.contactPhone}</p>
                  <p className="text-xs text-slate-500">Mon-Fri 9am to 6pm IST</p>
                </div>
              </div>

               <div className="flex items-start space-x-4">
                 <div className="bg-white p-3 rounded-lg shadow-sm text-orange-500">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Operations</h3>
                  <p className="text-slate-600">Warehouses operate 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white">
                  <option>General Warehousing</option>
                  <option>Cold Storage</option>
                  <option>E-commerce Fulfillment</option>
                  <option>Distribution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-orange-500/30">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;