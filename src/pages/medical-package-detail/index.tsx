import React from 'react';
import { useParams } from 'react-router-dom';
import medicalPackagesData from '@/mock/medical-packages.json';

const MedicalPackageDetail = () => {
  const { id } = useParams();
  const packageDetail = medicalPackagesData.packages.find(pkg => pkg.id === id);

  if (!packageDetail) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">Không tìm thấy gói khám</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={packageDetail.image} 
          alt={packageDetail.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{packageDetail.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-green-600 font-semibold">{packageDetail.price}</div>
            <div className="text-gray-600">Thời gian: {packageDetail.duration}</div>
          </div>
          <div className="space-y-4">
            <div className="text-gray-600">
              <h2 className="font-semibold mb-2">Mô tả gói khám</h2>
              <p>{packageDetail.description}</p>
            </div>
            <div className="text-gray-600">
              <h2 className="font-semibold mb-2">Quy trình khám</h2>
              <ul className="list-disc list-inside space-y-2">
                {packageDetail.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="text-gray-600">
              <h2 className="font-semibold mb-2">Lưu ý</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Nhịn ăn 8 tiếng trước khi khám</li>
                <li>Mang theo giấy tờ tùy thân</li>
                <li>Thời gian khám: 7:00 - 17:00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalPackageDetail; 