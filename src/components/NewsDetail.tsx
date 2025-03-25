import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NewsDetailProps {
  title: string;
  date: string;
  views: number;
  content: string;
  image?: string;
}

const NewsDetail: React.FC<NewsDetailProps> = ({
  title,
  date,
  views,
  content,
  image
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="flex items-center justify-between px-4 pt-2">
          <button 
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <img src="/static/icons/back.svg" alt="Back" className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center">
              <img src="/static/icons/more.svg" alt="More" className="w-6 h-6" />
            </button>
            <button 
              onClick={() => navigate('/')}
              className="w-8 h-8 flex items-center justify-center"
            >
              <img src="/static/icons/close.svg" alt="Close" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-4">
        {/* TCI Banner */}
        <div className="bg-gradient-to-r from-[#FFE5D9] to-[#FFF3ED] p-4 relative">
          <img 
            src="/static/images/tci-logo.png" 
            alt="TCI Logo" 
            className="h-6 mb-3"
          />
          <div className="text-red-600 font-bold text-lg leading-tight mb-1">
            TẤT CẢ NGƯỜI THAM GIA BẢO HIỂM Y TẾ
          </div>
          <div className="text-red-600 font-bold text-lg leading-tight">
            KHI ĐI KHÁM TẠI PHÒNG KHÁM TCI
          </div>
          <div className="flex items-center gap-1 mt-2 text-gray-600">
            <img src="/static/icons/location.svg" alt="Location" className="w-4 h-4" />
            <span className="text-sm">216 Trần Duy Hưng và 32 Đại từ</span>
          </div>
          <div className="bg-red-600 text-white px-4 py-1 rounded-full inline-block mt-3 font-medium">
            ĐƯỢC HƯỞNG 100% QUYỀN LỢI THẺ
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Theo Luật số 61/2024/QH15 Sửa đổi bổ sung luật Bảo Hiểm Y tế
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-700"></div>
        </div>

        {/* Insurance Card */}
        <div className="p-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-red-600 font-bold mb-1">THẺ BẢO HIỂM Y TẾ</div>
                <div className="text-sm text-gray-600">Mã số: 0801503677</div>
              </div>
              <img src="/static/images/bhyt-logo.png" alt="BHYT Logo" className="h-8" />
            </div>
            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <div>Họ và tên: HOÀNG VĂN A</div>
              <div>Ngày sinh: 17/07/1990 | Giới tính: Nam</div>
              <div>Nơi ĐKKB: TTYT quận Hoàn Kiếm</div>
              <div>Giá trị sử dụng: 01/01/2023 - 31/12/2023</div>
              <div>Nơi cấp: BHXH Quận Hoàn Kiếm, Hà Nội</div>
            </div>
            <img 
              src="/static/images/qr-code.png" 
              alt="QR Code" 
              className="w-24 h-24 mt-4"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h1>
          
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <span>{date}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <img src="/static/icons/eye.svg" alt="Views" className="w-4 h-4" />
              <span>{views}</span>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>

      {/* Share Button */}
      <button className="fixed bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
        <img src="/static/icons/share.svg" alt="Share" className="w-6 h-6" />
      </button>
    </div>
  );
}

export default NewsDetail; 