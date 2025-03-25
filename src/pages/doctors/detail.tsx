import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Page } from "@/components/ui/page";

// Mock data - replace with actual API call
const doctors = [
  {
    id: 1,
    name: "BS. Nguyễn Văn A",
    specialty: "Nhi khoa",
    experience: "15 năm",
    image: "/static/images/doctor1.jpg",
    description: "Bác sĩ chuyên khoa Nhi với hơn 15 năm kinh nghiệm trong việc khám và điều trị các bệnh lý ở trẻ em. Tốt nghiệp Đại học Y Dược TP.HCM, từng công tác tại Bệnh viện Nhi Đồng 1.",
    schedule: [
      { day: "Thứ 2", time: "8:00 - 12:00" },
      { day: "Thứ 3", time: "13:00 - 17:00" },
      { day: "Thứ 4", time: "8:00 - 12:00" },
      { day: "Thứ 5", time: "13:00 - 17:00" },
      { day: "Thứ 6", time: "8:00 - 12:00" },
    ],
  },
  // Add more doctors as needed
];

const DoctorDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((d) => d.id === Number(id));

  if (!doctor) {
    return (
      <Page className="flex items-center justify-center">
        <p>Không tìm thấy thông tin bác sĩ</p>
      </Page>
    );
  }

  return (
    <Page className="flex flex-col gap-4 p-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold">{doctor.name}</h1>
              <p className="text-gray-600">{doctor.specialty}</p>
              <p className="text-sm text-gray-500">Kinh nghiệm: {doctor.experience}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-2">Giới thiệu</h2>
          <p className="text-gray-600">{doctor.description}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-2">Lịch làm việc</h2>
          <div className="space-y-2">
            {doctor.schedule.map((slot, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-medium">{slot.day}</span>
                <span className="text-gray-600">{slot.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Button
        className="w-full"
        onClick={() => navigate("/appointment", { state: { doctorId: doctor.id } })}
      >
        Đặt lịch khám
      </Button>
    </Page>
  );
};

export default DoctorDetailPage; 