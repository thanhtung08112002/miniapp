import React from 'react';

interface MenuItemProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center gap-2 cursor-pointer" 
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-full bg-[#E7F8F0] flex items-center justify-center">
        <img src={icon} alt={label} className="w-6 h-6" />
      </div>
      <span className="text-center text-sm">{label}</span>
    </div>
  );
}

export default MenuItem; 