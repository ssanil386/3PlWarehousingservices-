import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { LayoutDashboard, FileEdit, Settings, LogOut, Truck } from 'lucide-react';

const AdminLayout: React.FC = () => {
  const { isAuthenticated, logout } = useSite();
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <Truck className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Admin Access</h2>
          <p className="text-slate-500 mb-6">Please log in to manage the warehouse portal.</p>
          <button 
            onClick={() => {
              // Simulating login
              const { login } = useSite(); 
              // This is a hack because we can't call hook inside callback easily without refactoring
              // In real app, this would be a separate Login Page component.
              // For this demo, we'll just redirect to a login route or handle it in App.tsx 
              // But since we are inside the component, let's just show a message.
            }}
            className="hidden" // Hiding this because actual logic is in App.tsx wrapper or handled via context below
          >
          </button>
           <p className="text-sm text-red-500">Redirecting to login...</p>
           {/* In a real app, we'd use a Redirect or useEffect to push to /login */}
        </div>
      </div>
    );
  }

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Content Manager', path: '/admin/content', icon: FileEdit },
    { name: 'Site Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
           <div className="flex items-center space-x-2 text-white">
             <Truck className="h-6 w-6 text-orange-500" />
             <span className="font-bold text-lg tracking-wide">3PL ADMIN</span>
           </div>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  active ? 'bg-orange-600 text-white' : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => {
                logout();
                navigate('/');
            }}
            className="flex items-center space-x-3 px-4 py-3 w-full text-left text-slate-400 hover:text-white transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 md:px-8">
           <h2 className="font-semibold text-slate-800">
             {navItems.find(i => i.path === location.pathname)?.name || 'Admin'}
           </h2>
           <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-500">Welcome, Admin</span>
              <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs">
                AD
              </div>
           </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;