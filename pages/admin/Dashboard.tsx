import React from 'react';
import { useSite } from '../../context/SiteContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, Package, FileText, MapPin } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { services, posts, locations } = useSite();

  // Mock Analytics Data
  const monthlyData = [
    { name: 'Jan', visits: 4000, inquiries: 240 },
    { name: 'Feb', visits: 3000, inquiries: 139 },
    { name: 'Mar', visits: 2000, inquiries: 980 },
    { name: 'Apr', visits: 2780, inquiries: 390 },
    { name: 'May', visits: 1890, inquiries: 480 },
    { name: 'Jun', visits: 2390, inquiries: 380 },
  ];

  const warehouseUtilization = [
    { name: 'Mumbai', usage: 85 },
    { name: 'Delhi', usage: 70 },
    { name: 'Bangalore', usage: 92 },
    { name: 'Chennai', usage: 65 },
    { name: 'Kolkata', usage: 50 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-full mr-4">
            <Package className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Services</p>
            <h3 className="text-2xl font-bold text-slate-900">{services.length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center">
          <div className="p-3 bg-purple-100 text-purple-600 rounded-full mr-4">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Blog Posts</p>
            <h3 className="text-2xl font-bold text-slate-900">{posts.length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center">
          <div className="p-3 bg-green-100 text-green-600 rounded-full mr-4">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Locations</p>
            <h3 className="text-2xl font-bold text-slate-900">{locations.length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-full mr-4">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">New Leads</p>
            <h3 className="text-2xl font-bold text-slate-900">128</h3>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Site Traffic */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Website Traffic & Leads</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="visits" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="inquiries" stroke="#f97316" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Warehouse Utilization */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Warehouse Utilization (%)</h3>
          <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={warehouseUtilization} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" domain={[0, 100]} stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={80} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="usage" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;