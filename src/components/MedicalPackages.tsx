import React from 'react';
import { Box, Text, Button } from 'zmp-ui';
import { useNavigate } from 'react-router-dom';
import { categories, medicalPackages } from '@/data/services';
import toast from 'react-hot-toast';


const MedicalPackages: React.FC = () => {
  const navigate = useNavigate();

  const handlePackageClick = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/medical-packages/${id}`);
  };

  const toastConfig = {
    duration: 3000,
    position: "top-center",
    style: {
      color: "#fff",
      borderRadius: "8px",
      padding: "12px 24px",
    },
  };


  return (
    <Box className="flex flex-col bg-gray-100">
      {/* Search bar */}
      <Box className="bg-[#00B14F] p-3 flex items-center">
        <Box className="flex items-center bg-white rounded-full w-full px-3 py-1.5">
          <i className="zi-search text-[#00B14F] text-sm mr-2" />
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            className="w-full bg-transparent outline-none text-xs"
          />
          <Box className="flex gap-2">
            <i className="zi-more-vert text-[#00B14F] text-sm" />
            <i className="zi-close text-[#00B14F] text-sm" />
          </Box>
        </Box>
      </Box>

      {/* Categories */}
      <Box className="grid grid-cols-4 bg-white p-3 gap-3">
        <Box className="flex flex-col items-center cursor-pointer" onClick={() => { toast.error('Đang phát triển, cảm ơn', toastConfig) }}>
          <img src="/icons/medical.svg" alt="Dịch vụ khám" className="w-6 h-6" />
          <Text size="xxSmall" className="text-center mt-1">Dịch vụ khám</Text>
        </Box>
        <Box className="flex flex-col items-center cursor-pointer" onClick={() => { toast.error('Đang phát triển, cảm ơn', toastConfig) }}>
          <img src="/icons/pregnancy.svg" alt="Gói thai sản" className="w-6 h-6" />
          <Text size="xxSmall" className="text-center mt-1">Gói thai sản</Text>
        </Box>
        <Box className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/medical-packages')}>
          <img src="/icons/stethoscope.svg" alt="Gói khám đa khoa" className="w-6 h-6" />
          <Text size="xxSmall" className="text-center mt-1 text-[#00B14F]">Gói khám đa khoa</Text>
          <Box className="h-0.5 w-full bg-[#00B14F] mt-1" />
        </Box>
        <Box className="flex flex-col items-center cursor-pointer" onClick={() => { toast.error('Đang phát triển, cảm ơn', toastConfig) }}>
          <img src="/icons/web.svg" alt="Trang web" className="w-6 h-6" />
          <Text size="xxSmall" className="text-center mt-1">Trang web</Text>
        </Box>
      </Box>

      {/* Main content */}
      <Box className="flex">
        {/* Sidebar */}
        <Box className="w-1/4 bg-white">
          {categories.map((item, index) => (
            <Box
              key={index}
              className="p-2.5 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
              onClick={() => { toast.error('Đang phát triển, cảm ơn', toastConfig) }}
            >
              <Text size="xxSmall" className="text-gray-700">{item}</Text>
            </Box>
          ))}
        </Box>

        {/* Package grid */}
        <Box className="flex-1 p-2">
          <Box className="grid grid-cols-2 gap-2">
            {medicalPackages.map((pkg) => (
              <Box
                key={pkg.id}
                className="bg-white cursor-pointer hover:shadow-sm transition-shadow"
                onClick={(e) => handlePackageClick(pkg.id, e)}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full aspect-video object-cover"
                />
                <Box className="p-2">
                  <Text size="xxSmall" className="line-clamp-2 mb-2">
                    {pkg.title}
                  </Text>
                  <Button
                    variant="tertiary"
                    size="small"
                    className="w-full text-[#00B14F] border border-[#00B14F] hover:bg-[#00B14F] hover:text-white text-xs"
                    onClick={(e) => handlePackageClick(pkg.id, e)}
                  >
                    Liên hệ
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MedicalPackages;