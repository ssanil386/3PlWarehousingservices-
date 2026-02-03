import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { generateLogisticsContent, generateServiceDescription } from '../../services/geminiService';
import { BlogPost, Service } from '../../types';
import { Plus, Trash2, Wand2, Loader2 } from 'lucide-react';

const ContentManager: React.FC = () => {
  const { posts, services, addPost, deletePost, addService } = useSite();
  const [activeTab, setActiveTab] = useState<'posts' | 'services'>('posts');

  // Blog Form State
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Service Form State
  const [serviceName, setServiceName] = useState('');
  const [serviceDesc, setServiceDesc] = useState('');
  const [isGeneratingDesc, setIsGeneratingDesc] = useState(false);

  const handleGenerateBlog = async () => {
    if (!blogTitle) return alert("Please enter a title first");
    setIsGenerating(true);
    const content = await generateLogisticsContent(blogTitle);
    setBlogContent(content);
    setIsGenerating(false);
  };

  const handleGenerateServiceDesc = async () => {
    if (!serviceName) return alert("Please enter a service name first");
    setIsGeneratingDesc(true);
    const desc = await generateServiceDescription(serviceName);
    setServiceDesc(desc);
    setIsGeneratingDesc(false);
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: blogTitle,
      summary: blogContent.slice(0, 100) + '...',
      content: blogContent,
      author: 'Admin',
      date: new Date().toISOString().split('T')[0],
      image: `https://picsum.photos/800/400?random=${Date.now()}`
    };
    addPost(newPost);
    setBlogTitle('');
    setBlogContent('');
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    const newService: Service = {
      id: Date.now().toString(),
      title: serviceName,
      description: serviceDesc,
      icon: 'Box',
      image: `https://picsum.photos/800/600?random=${Date.now()}`
    };
    addService(newService);
    setServiceName('');
    setServiceDesc('');
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-4 border-b border-gray-200 pb-2">
        <button
          onClick={() => setActiveTab('posts')}
          className={`pb-2 px-4 font-medium ${activeTab === 'posts' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-slate-500'}`}
        >
          Blog Posts
        </button>
        <button
          onClick={() => setActiveTab('services')}
          className={`pb-2 px-4 font-medium ${activeTab === 'services' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-slate-500'}`}
        >
          Services
        </button>
      </div>

      {activeTab === 'posts' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create Post Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 h-fit">
            <h2 className="text-xl font-bold mb-4">Create New Article</h2>
            <form onSubmit={handleAddPost} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  className="w-full rounded-md border border-slate-300 p-2 focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="e.g. Trends in Supply Chain 2024"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
                <div className="relative">
                  <textarea
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    rows={6}
                    className="w-full rounded-md border border-slate-300 p-2 focus:ring-2 focus:ring-orange-500 outline-none"
                    placeholder="Article content..."
                  />
                  <button
                    type="button"
                    onClick={handleGenerateBlog}
                    disabled={isGenerating}
                    className="absolute top-2 right-2 flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded text-xs font-semibold hover:bg-blue-100 disabled:opacity-50 transition-colors"
                  >
                    {isGenerating ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : <Wand2 className="h-3 w-3 mr-1" />}
                    AI Write
                  </button>
                </div>
                <p className="text-xs text-slate-400 mt-1">Use AI to generate a draft based on the title.</p>
              </div>

              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-medium transition-colors">
                Publish Post
              </button>
            </form>
          </div>

          {/* List Posts */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Existing Posts</h2>
            {posts.map(post => (
              <div key={post.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-800">{post.title}</h3>
                  <p className="text-xs text-slate-500">{post.date} • {post.author}</p>
                </div>
                <button 
                  onClick={() => deletePost(post.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'services' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 h-fit">
            <h2 className="text-xl font-bold mb-4">Add New Service</h2>
            <form onSubmit={handleAddService} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Name</label>
                <input
                  type="text"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  className="w-full rounded-md border border-slate-300 p-2 focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="e.g. Reverse Logistics"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <div className="relative">
                  <textarea
                    value={serviceDesc}
                    onChange={(e) => setServiceDesc(e.target.value)}
                    rows={4}
                    className="w-full rounded-md border border-slate-300 p-2 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleGenerateServiceDesc}
                    disabled={isGeneratingDesc}
                    className="absolute top-2 right-2 flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded text-xs font-semibold hover:bg-blue-100 disabled:opacity-50 transition-colors"
                  >
                     {isGeneratingDesc ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : <Wand2 className="h-3 w-3 mr-1" />}
                    AI Desc
                  </button>
                </div>
              </div>

              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-medium transition-colors">
                Add Service
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Current Services</h2>
            {services.map(service => (
              <div key={service.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                   <img src={service.image} alt={service.title} className="w-10 h-10 rounded object-cover" />
                   <div>
                    <h3 className="font-bold text-slate-800">{service.title}</h3>
                   </div>
                </div>
                {/* Delete functionality for services could be added here, just UI for now to keep simple */}
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Active</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentManager;