import React from 'react';
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MenuItem from '../../components/MenuItem';
import ServiceSection from '../../components/ServiceSection';
import { medicalPackages, otherServices } from '../../data/services';
// import ServiceScroll from "@/components/ui/service-scroll";

const Page = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <div className="bg-green-600 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/static/images/logo.jpg" alt="Avatar" className="w-10 h-10 rounded-full bg-white" />
          <span className="ml-3 text-white text-lg font-medium">Guest</span>
        </div>
      </div> */}
      <div className="bg-white p-4">
        <div className="grid grid-cols-4 gap-6">
          <MenuItem 
            icon="/static/icons/news.svg" 
            label="Tin tức"
            onClick={() => navigate('/news')}
          />
          <MenuItem 
            icon="/static/icons/gift.svg" 
            label="Ưu đãi"
            onClick={() => navigate('/promotions')}
          />
          <MenuItem 
            icon="/static/icons/health.svg" 
            label="Sổ tay sức khỏe"
            onClick={() => navigate('/health-book')}
          />
          <MenuItem 
            icon="/static/icons/history.svg" 
            label="Lịch sử"
            onClick={() => navigate('/history')}
          />
        </div>
      </div>
      {/* Banner */}
      <div className="px-4 my-4">
        <img 
          src="/static/images/promotion.jpg" 
          alt="Promotion"
          className="w-full rounded-lg"
        />
      </div>

      {/* Follow OA Card */}
      <div className="mx-4 p-4 bg-[#E7F8F0] border-[#00a651] rounded-lg border border-gray-200">
        <div className="">Quan tâm OA để nhận các đặc quyền ưu đãi</div>
        <hr className="my-2 border-t border-white" />
        <div className="flex items-center gap-3">
          <img src="/static/images/logo.jpg" alt="TCI Hospital" className="w-10 h-10 object-cover rounded-3xl" />
          <div className="flex-1">
            <div className="font-medium">TCI Hospital - Hệ thống y tế Thu Cúc</div>
          </div>
          <Button variant="default" className="px-4 text-white bg-[#00a651] rounded-full">
            Quan tâm
          </Button>
        </div>
      </div>

      <ServiceSection
        title="Gói Khám Đa Khoa"
        services={medicalPackages}
        type="medical"
        viewAllPath="/medical-packages"
      />

      <ServiceSection
        title="Dịch Vụ Khác"
        services={otherServices}
        type="service"
        viewAllPath="/other-services"
      />

    

      {/* News Section */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Tin Tức</h2>
            <Button variant="link" className="text-green-600 font-medium hover:no-underline" onClick={() => navigate('/news')}>
              Xem thêm
            </Button>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="grid grid-cols-2 gap-4">
            <Card className="cursor-pointer" onClick={() => navigate('/news/1')}>
              <CardContent className="p-0">
                <img src="/static/images/mau.jpg" alt="News 1" className="w-full h-[120px] object-cover rounded-t-lg" />
                <div className="p-3">
                  <h3 className="font-medium line-clamp-2">Thông báo chính sách bảo hiểm y tế từ năm 2025 tại TCI</h3>
                  <div className="flex items-center text-xs text-gray-500 mt-2 space-x-2">
                    <span>10:19, 15/03</span>
                    <span>mắt 25</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="cursor-pointer" onClick={() => navigate('/news/2')}>
              <CardContent className="p-0">
                <img src="/static/images/mau.jpg" alt="News 2" className="w-full h-[120px] object-cover rounded-t-lg" />
                <div className="p-3">
                  <h3 className="font-medium line-clamp-2">TCI tri ân - Tặng tổng 200 tỷ đồng cho khách hàng khám chữa bệnh</h3>
                  <div className="flex items-center text-xs text-gray-500 mt-2 space-x-2">
                    <span>15:35, 20/02</span>
                    <span>mắt 39</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
