import React from 'react';
import { useParams } from 'react-router-dom';
import NewsDetail from '@/components/NewsDetail';

// Mock data - Trong thực tế sẽ lấy từ API dựa vào ID
const newsData = {
  id: 1,
  title: 'Thông báo chính sách bảo hiểm y tế từ năm 2025 tại TCI',
  date: '10:19, 15/03',
  views: 25,
  content: `
    <p>Trong những năm qua, <span style="color: #00B14F">Hệ thống Y tế Thu Cúc</span> TCI luôn có uy tín cao trong khối y tế tư nhân. Không chỉ được đánh giá về chất lượng dịch vụ khám chữa bệnh, chăm sóc sức khỏe, thai sản vượt trội mà Thu Cúc TCI còn được khách hàng tin yêu bởi việc thực hiện các chính sách bảo hiểm y tế và bảo hiểm bảo lãnh đúng quy định, thủ tục giải quyết nhanh chóng, đảm bảo tối ưu quyền lợi khách hàng, bệnh nhân.</p>
    <p>Luật Bảo hiểm y tế (BHYT) vẫn liên tục được sửa đổi qua các năm nhằm tăng thêm quyền lợi cho người bệnh, giúp cho ngày càng nhiều người được hưởng lợi từ bảo hiểm y tế. Ở lần sửa đổi mới nhất, áp dụng từ 1/1/2025, Luật Bảo hiểm y tế có nhiều điểm mới và được đánh giá là mang lại lợi ích thiết thực cho người dân.</p>
    <p>Theo đó, tại Hệ thống Y tế Thu Cúc <span style="color: #00B14F">TCI</span> triển khai theo đúng quy định của Luật BHYT như sau:</p>
  `,
  image: '/static/images/mau.jpg'
};

const NewsDetailPage: React.FC = () => {
  const { id } = useParams();
  
  // Trong thực tế sẽ fetch data dựa vào id
  return <NewsDetail {...newsData} />;
};

export default NewsDetailPage; 