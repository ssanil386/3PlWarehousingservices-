import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { ArrowRight, Package, ShieldCheck, Clock, BarChart3 } from 'lucide-react';

const Home: React.FC = () => {
  const { config, services } = useSite();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Warehouse interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Seamless Warehousing <br />
            <span className="text-orange-500">Solutions for India</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto font-light">
            {config.tagline}. Optimized storage, faster fulfillment, and smarter distribution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center"
            >
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We combine robust infrastructure with advanced technology to deliver superior 3PL services across the Indian subcontinent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scalable Storage</h3>
              <p className="text-slate-600">Flexible warehousing space that grows with your business demands.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Facilities</h3>
              <p className="text-slate-600">24/7 surveillance, fire safety compliance, and access control systems.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-slate-600">Optimized last-mile networks ensuring prompt delivery across India.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Tech</h3>
              <p className="text-slate-600">Advanced WMS & TMS integration for complete inventory visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">1.5 Lac +</div>
              <div className="text-sm text-slate-400">Sq. Ft. Warehousing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">35</div>
              <div className="text-sm text-slate-400">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-sm text-slate-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-sm text-slate-400">Support Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Core Services</h2>
              <p className="text-slate-600">Comprehensive logistics solutions tailored for you.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-orange-600 font-semibold hover:text-orange-700">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{service.description}</p>
                  <Link to="/services" className="text-orange-600 font-medium text-sm hover:underline">Learn More &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
           <div className="mt-8 md:hidden text-center">
             <Link to="/services" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;