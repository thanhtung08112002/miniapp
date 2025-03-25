import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Page } from "@/components/ui/page";
import { useState } from "react";

// Mock data - replace with actual API call
const doctors = [
  {
    id: 1,
    name: "BS. Nguyễn Văn A",
    specialty: "Nhi khoa",
    experience: "15 năm",
    image: "/static/images/doctor1.jpg",
  },
  {
    id: 2,
    name: "BS. Trần Thị B",
    specialty: "Nội khoa",
    experience: "12 năm",
    image: "/static/images/doctor2.jpg",
  },
  {
    id: 3,
    name: "BS. Lê Văn C",
    specialty: "Tim mạch",
    experience: "20 năm",
    image: "/static/images/doctor3.jpg",
  },
];

const DoctorListPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Page className="flex flex-col gap-4 p-4">
      <Input
        placeholder="Tìm kiếm bác sĩ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4"
      />

      <div className="grid gap-4">
        {filteredDoctors.map((doctor) => (
          <Card
            key={doctor.id}
            className="cursor-pointer"
            onClick={() => navigate(`/doctor/${doctor.id}`)}
          >
            <CardContent className="p-4 flex gap-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
                <p className="text-sm text-gray-500">Kinh nghiệm: {doctor.experience}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Page>
  );
};

export default DoctorListPage; 