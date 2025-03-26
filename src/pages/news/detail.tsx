import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NewsDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - thay thế bằng API call thực tế sau này
  const newsData = {
    title: 'Thông báo chính sách bảo hiểm y tế từ năm 2025 tại DJ',
    date: '10:19, 15/03',
    views: 25,
    content: [
      {
        type: 'text',
        value: 'Trong những năm qua, Hệ thống Y tế DevJob DJ luôn có uy tín cao trong khối y tế tư nhân. Không chỉ được đánh giá về chất lượng dịch vụ khám chữa bệnh, chăm sóc sức khỏe, thai sản vượt trội mà DevJob DJ còn được khách hàng tin yêu bởi việc thực hiện các chính sách bảo hiểm y tế và bảo hiểm bảo lãnh đúng quy định, thủ tục giải quyết nhanh chóng, đảm bảo tối ưu quyền lợi khách hàng, bệnh nhân.'
      },
      {
        type: 'text',
        value: 'Luật Bảo hiểm y tế (BHYT) vẫn liên tục được sửa đổi qua các năm nhằm tăng thêm quyền lợi cho người bệnh, giúp cho ngày càng nhiều người được hưởng lợi từ bảo hiểm y tế. Ở lần sửa đổi mới nhất, áp dụng từ 1/1/2025, Luật Bảo hiểm y tế có nhiều điểm mới và được đánh giá là mang lại lợi ích thiết thực cho người dân.'
      },
      {
        type: 'image',
        url: '/static/images/mau.jpg',
        caption: 'TẤT CẢ NGƯỜI THAM GIA BẢO HIỂM Y TẾ KHI ĐI KHÁM TẠI PHÒNG KHÁM DJ ĐƯỢC HƯỞNG 100% QUYỀN LỢI THẺ'
      },
      {
        type: 'text',
        value: 'Theo đó, tại Hệ thống Y tế DevJob DJ triển khai theo đúng quy định của Luật BHYT như sau:'
      }
    ],
    shareImage: '/static/images/mau.jpg'
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleShare = () => {
    // Implement share functionality
    console.log('Share clicked');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-white">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate(-1)} className="p-2">
            <img src="/static/icons/back.svg" alt="Back" className="w-6 h-6" />
          </button>
          <button className="p-2">
            <img src="/static/icons/share.svg" alt="Share" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="w-full h-[240px]">
          <img 
            src={newsData.shareImage} 
            alt={newsData.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="px-4 pb-4">
          <h1 className="text-xl font-medium mt-4 mb-2">{newsData.title}</h1>
          <div className="flex items-center text-xs text-gray-500 mb-4">
            <span>{newsData.date}</span>
            <span className="mx-2">•</span>
            <span>{newsData.views} lượt xem</span>
          </div>

          <div className="space-y-4">
            {newsData.content.map((item, index) => {
              if (item.type === 'text') {
                return (
                  <p key={index} className="text-sm leading-6 text-gray-700">
                    {item.value}
                  </p>
                );
              } else if (item.type === 'image') {
                return (
                  <div key={index} className="space-y-2">
                    <img 
                      src={item.url} 
                      alt={item.caption} 
                      className="w-full rounded-lg"
                    />
                    {item.caption && (
                      <p className="text-xs text-center text-gray-500">
                        {item.caption}
                      </p>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail; 