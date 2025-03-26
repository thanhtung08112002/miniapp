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

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Thông báo chính sách bảo hiểm y tế từ năm 2025 tại DJ',
    image: '/static/images/mau.jpg',
    link: '/news/1',
    date: '10:19, 15/03',
    views: 25
  },
  {
    id: '2',
    title: 'DJ tri ân - Tặng tổng 200 tỷ đồng cho khách hàng khám chữa bệnh',
    image: '/static/images/mau.jpg',
    link: '/news/2',
    date: '15:35, 20/02',
    views: 39
  },
  {
    id: '3',
    title: 'Chương trình ưu đãi đặc biệt - Giảm 30% cho gói khám sức khỏe tổng quát',
    image: '/static/images/mau.jpg',
    link: '/news/3',
    date: '09:00, 18/03',
    views: 42
  },
  {
    id: '4',
    title: 'Khai trương phòng khám đa khoa mới tại quận Hoàn Kiếm',
    image: '/static/images/mau.jpg',
    link: '/news/4',
    date: '14:20, 10/03',
    views: 31
  },
  {
    id: '5',
    title: 'Tư vấn miễn phí các gói khám sức khỏe định kỳ cho doanh nghiệp',
    image: '/static/images/mau.jpg',
    link: '/news/5',
    date: '11:45, 05/03',
    views: 28
  }
];

const packageDetails: Record<string, PackageDetail> = {
  'ent': {
    id: 'ent',
    title: 'Chi tiết về gói khám Tai Mũi Họng nâng cao tại Thu Cúc TCI',
    image: '/images/ent-package.jpg',
    description: 'Thời tiết khắc nghiệt, ô nhiễm không khí tại Việt Nam trong những năm trở lại đây là nguyên nhân hàng đầu khiến cho tỷ lệ các bệnh về người lớn và trẻ em gia tăng mạnh mẽ. Nhằm đáp ứng nhu cầu thăm khám Tai Mũi Họng đang tăng cao, Thu Cúc TCI xây dựng gói khám Tai Mũi Họng nâng cao giúp khách hàng thăm khám chuyên sâu, bảo vệ sức khỏe toàn diện. Thông tin chi tiết về gói khám mời bạn tham khảo tại bài viết này!'
  }
};

const MedicalPackageDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const packageDetail = id ? packageDetails[id] : null;

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

      {/* Related News Section */}
      <Box className="mt-3 bg-white">
        <Box className="p-4 flex items-center justify-between">
          <Text.Title size="small" className="text-gray-800">Tin Tức</Text.Title>
          <Button 
            variant="tertiary"
            className="text-[#00B14F] text-xs font-medium"
            onClick={() => navigate('/news')}
          >
            Xem thêm
          </Button>
        </Box>
        <Box className="overflow-x-auto">
          <Box className="flex gap-4 px-4 pb-4 min-w-min">
            {newsItems.map((news) => (
              <Box
                key={news.id}
                className="flex-shrink-0 w-[160px] bg-white rounded-lg overflow-hidden cursor-pointer shadow-sm"
                onClick={() => navigate(news.link)}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-[120px] object-cover rounded-t-lg"
                />
                <Box className="p-3">
                  <Text size="xxSmall" className="font-medium line-clamp-2">
                    {news.title}
                  </Text>
                  <Box className="flex items-center text-xs text-gray-500 mt-2 space-x-2">
                    <Text size="xxSmall">{news.date}</Text>
                    <Text size="xxSmall">mắt {news.views}</Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MedicalPackageDetail; 