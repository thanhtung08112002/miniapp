import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import './index.scss'

const NewsPage = () => {
  const navigate = useNavigate();


  // Mock data - thay thế bằng API call thực tế sau này
  const newsList = [
    {
      id: 1,
      title: 'Thông báo chính sách bảo hiểm y tế từ năm 2025 tại TCI',
      image: '/static/images/mau.jpg',
      date: '10:19, 15/03',
      views: 25,
      summary: 'Trong những năm qua, Hệ thống Y tế Thu Cúc TCI luôn có uy tín cao trong khối y tế tư nhân...'
    },
    {
      id: 2,
      title: 'TCI tri ân - Tặng tổng 200 tỷ đồng cho khách hàng khám chữa bệnh',
      image: '/static/images/mau.jpg',
      date: '15:35, 20/02',
      views: 39,
      summary: 'Nhân dịp kỷ niệm 15 năm thành lập, TCI triển khai chương trình tri ân khách hàng...'
    },
    {
      id: 3,
      title: 'Bùng nổ ưu đãi tại Thu Cúc TCI 216 Trần Duy Hưng',
      image: '/static/images/mau.jpg',
      date: '15:13, 05/02',
      views: 22,
      summary: 'Cơ sở mới của TCI tại 216 Trần Duy Hưng triển khai nhiều chương trình ưu đãi hấp dẫn...'
    }
  ];

  const handleNewsClick = (id: number) => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-4 p-4">
        {newsList.map(news => (
          <Card 
            key={news.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleNewsClick(news.id)}
          >
            <CardContent className="p-0">
              <img 
                src={news.image} 
                alt={news.title} 
                className="w-full h-[160px] object-cover rounded-t-lg"
              />
              <div className="p-3 space-y-2">
                <h3 className="text-base font-medium line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {news.summary}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{news.date}</span>
                  <span className="mx-2">•</span>
                  <span>{news.views} lượt xem</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsPage; 