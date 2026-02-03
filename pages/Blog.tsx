import React from 'react';
import { useSite } from '../context/SiteContext';
import { Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
  const { posts } = useSite();

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-16">Insights & News</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6 h-64 shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
                <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
                <span className="flex items-center"><User className="h-3 w-3 mr-1" /> {post.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {post.summary}
              </p>
              <span className="text-orange-600 font-semibold text-sm underline-offset-4 group-hover:underline">Read Article</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;