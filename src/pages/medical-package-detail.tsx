import React from 'react';
import { Box, Text, Button, Icon } from 'zmp-ui';
import { useNavigate, useParams } from 'react-router-dom';

interface PackageDetail {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface NewsItem {
  id: string;
  title: string;
  image: string;
  link: string;
  date: string;
  views: number;
}



const packageDetails: Record<string, PackageDetail> = {
  'ent': {
    id: 'ent',
    title: 'Chi tiết về gói khám Tai Mũi Họng nâng cao tại Thu Cúc TCI',
    image: '/static/images/mau.jpg',
    description: 'Thời tiết khắc nghiệt, ô nhiễm không khí tại Việt Nam trong những năm trở lại đây là nguyên nhân hàng đầu khiến cho tỷ lệ các bệnh về người lớn và trẻ em gia tăng mạnh mẽ. Nhằm đáp ứng nhu cầu thăm khám Tai Mũi Họng đang tăng cao, Thu Cúc TCI xây dựng gói khám Tai Mũi Họng nâng cao giúp khách hàng thăm khám chuyên sâu, bảo vệ sức khỏe toàn diện. Thông tin chi tiết về gói khám mời bạn tham khảo tại bài viết này!'
  }
};

const MedicalPackageDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const packageDetail = id ? packageDetails[id] : null;
  const packageDetail = packageDetails['ent'];

  const handleBack = () => {
    navigate('/medical-packages');
  };

  if (!packageDetail) {
    return <Box className="p-2">Không tìm thấy gói khám</Box>;
  }

  return (
    <Box className="flex flex-col min-h-screen bg-gray-50">

      {/* Main Content */}
      <Box className="flex-1">
        {/* Image */}
        <Box className="relative">
          <img
            src={packageDetail.image}
            alt={packageDetail.title}
            className="w-full aspect-video object-cover"
          />
          <Box className="absolute top-2 right-2 bg-gray-500 rounded-lg p-1.5">
            <Icon icon="zi-share" className="text-white text-sm" />
          </Box>
          <Box className="absolute bottom-2 right-2 bg-gray-500 rounded text-white text-xs px-1.5">
            1/1
          </Box>
        </Box>

        {/* Title */}
        <Box className="p-3">
          <Text.Title size="small" className="text-xs">
            {packageDetail.title}
          </Text.Title>
          <Button
            className="w-full mt-3 bg-[#00B14F] text-white text-xs py-1.5"
            onClick={handleBack}
          >
            Liên hệ
          </Button>
        </Box>

        {/* Share Section */}
        <Box className="bg-[#F0E6FF] p-3 flex items-center justify-between">
          <Box className="flex items-center">
            <Icon icon="zi-share" className="text-[#00B14F] text-sm mr-2" />
            <Text className="text-[#00B14F] text-xs">Chia sẻ ngay cho bạn bè</Text>
          </Box>
          <Icon icon="zi-arrow-right" className="text-[#00B14F] text-sm" />
        </Box>

        {/* Description */}
        <Box className="p-3">
          <Text.Title size="small" className="mb-2 text-xs">Chi tiết sản phẩm</Text.Title>
          <Text className="text-gray-600 text-xs leading-relaxed">
            {packageDetail.description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MedicalPackageDetail;