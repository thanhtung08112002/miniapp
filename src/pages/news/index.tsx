import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import './index.scss'
import { newsData } from '@/data/services';


const NewsPage = () => {
  const navigate = useNavigate();

  const handleNewsClick = (id: string) => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-4 p-4">
        {newsData.map(news => (
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