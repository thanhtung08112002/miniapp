import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "./card";

interface ServiceItem {
  id: number;
  title: string;
  image: string;
  path: string;
}

interface ServiceScrollProps {
  title: string;
  viewAllPath: string;
  items: ServiceItem[];
}

const ServiceScroll: React.FC<ServiceScrollProps> = ({ title, viewAllPath, items }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between px-4 mb-3">
        <h2 className="text-lg font-medium">{title}</h2>
        <button 
          onClick={() => navigate(viewAllPath)}
          className="text-primary text-sm"
        >
          Xem tất cả
        </button>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto hide-scrollbar gap-3 px-4">
          {items.map((item) => (
            <Card 
              key={item.id}
              className="flex-shrink-0 w-[160px] cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(item.path)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-[120px] object-cover rounded-t-lg"
              />
              <div className="p-2">
                <h3 className="text-sm line-clamp-2">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceScroll; 