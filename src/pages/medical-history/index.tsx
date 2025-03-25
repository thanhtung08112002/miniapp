import { Card, CardContent } from "@/components/ui/card";
import { Page } from "@/components/ui/page";

// Mock data - replace with actual API call
const medicalHistory = [
  {
    id: 1,
    date: "2024-03-20",
    doctor: "BS. Nguyễn Văn A",
    specialty: "Nhi khoa",
    diagnosis: "Viêm họng cấp",
    prescription: "Paracetamol 500mg, 3 lần/ngày",
    nextAppointment: "2024-03-27",
  },
  {
    id: 2,
    date: "2024-03-15",
    doctor: "BS. Trần Thị B",
    specialty: "Nội khoa",
    diagnosis: "Cảm cúm",
    prescription: "Vitamin C, thuốc ho",
    nextAppointment: null,
  },
];

const MedicalHistoryPage = () => {
  return (
    <Page className="flex flex-col gap-4 p-4">
      <div className="space-y-4">
        {medicalHistory.map((record) => (
          <Card key={record.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{record.doctor}</h3>
                  <p className="text-sm text-gray-600">{record.specialty}</p>
                </div>
                <span className="text-sm text-gray-500">{record.date}</span>
              </div>

              <div className="space-y-2">
                <div>
                  <span className="font-medium">Chẩn đoán:</span>
                  <p className="text-gray-600">{record.diagnosis}</p>
                </div>

                <div>
                  <span className="font-medium">Đơn thuốc:</span>
                  <p className="text-gray-600">{record.prescription}</p>
                </div>

                {record.nextAppointment && (
                  <div>
                    <span className="font-medium">Lịch tái khám:</span>
                    <p className="text-gray-600">{record.nextAppointment}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Page>
  );
};

export default MedicalHistoryPage; 