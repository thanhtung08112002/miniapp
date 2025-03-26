import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  image: string;
  title: string;
}

interface ServiceSectionProps {
  title: string;
  services: Service[];
  type: 'medical-packages' | 'service';
  viewAllPath: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  title, 
  services,
  type,
  viewAllPath 
}) => {
  const navigate = useNavigate();

  const handleServiceClick = (id: string) => {
    
    navigate(`${viewAllPath}/${id}`);
  };

  return (
    <div className="py-4">
      <div className="flex justify-between items-center px-4 mb-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <button 
          className="text-green-600 font-medium"
          onClick={() => navigate(viewAllPath)}
        >
          Tất cả
        </button>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-4 pb-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              image={service.image}
              title={service.title}
              type={type}
              onClick={() => handleServiceClick(service.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection; 