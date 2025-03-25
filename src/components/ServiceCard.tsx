import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  image: string;
  title: string;
  type: 'medical' | 'service';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, image, title, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${type}/${id}`);
  };

  return (
    <div 
      className="flex flex-col bg-white rounded-lg shadow-md w-64 min-w-[256px] cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-gray-800 font-medium text-lg line-clamp-2 min-h-[56px]">
          {title}
        </h3>
        <button className="mt-2 text-green-600 font-medium">
          Liên hệ
        </button>
      </div>
    </div>
  );
}

export default ServiceCard; 