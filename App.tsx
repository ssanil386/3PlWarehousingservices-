import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SiteProvider, useSite } from './context/SiteContext';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Locations from './pages/Locations';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import ContentManager from './pages/admin/ContentManager';

// Protected Route Wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useSite();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <SiteProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="locations" element={<Locations />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="content" element={<ContentManager />} />
            <Route path="settings" element={<div className="p-4">Settings Page (Placeholder)</div>} />
          </Route>
        </Routes>
      </Router>
    </SiteProvider>
  );
};

export default App;