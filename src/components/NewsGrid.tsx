import React from 'react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  views?: number;
}

interface NewsGridProps {
  items: NewsItem[];
}

const NewsGrid: React.FC<NewsGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map(item => (
        <Link to={`/news/${item.id}`} key={item.id} className="block">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative pb-[60%]">
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium line-clamp-2 mb-1">{item.title}</h3>
              <div className="flex items-center text-xs text-gray-500 space-x-2">
                <span>{item.date}</span>
                {item.views && (
                  <>
                    <span>•</span>
                    <span>{item.views}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsGrid; 