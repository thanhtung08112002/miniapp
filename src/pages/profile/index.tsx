import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Page } from "@/components/ui/page";
import { useState } from "react";

// Mock data - replace with actual API call
const userProfile = {
  name: "Nguyễn Văn A",
  phone: "0123456789",
  email: "example@email.com",
  address: "123 Đường ABC, Quận 1, TP.HCM",
  dateOfBirth: "1990-01-01",
  gender: "Nam",
  bloodType: "A+",
  allergies: "Không",
  chronicConditions: "Không",
};

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(userProfile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Profile updated:", profile);
    setIsEditing(false);
  };

  return (
    <Page className="flex flex-col gap-4 p-4">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Thông tin cá nhân</h2>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Hủy" : "Chỉnh sửa"}
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Họ và tên</label>
                <Input
                  required
                  disabled={!isEditing}
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Số điện thoại</label>
                <Input
                  required
                  type="tel"
                  disabled={!isEditing}
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Email</label>
                <Input
                  required
                  type="email"
                  disabled={!isEditing}
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Địa chỉ</label>
                <Input
                  disabled={!isEditing}
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Ngày sinh</label>
                <Input
                  type="date"
                  disabled={!isEditing}
                  value={profile.dateOfBirth}
                  onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Giới tính</label>
                <Input
                  disabled={!isEditing}
                  value={profile.gender}
                  onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Nhóm máu</label>
                <Input
                  disabled={!isEditing}
                  value={profile.bloodType}
                  onChange={(e) => setProfile({ ...profile, bloodType: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Dị ứng</label>
                <Input
                  disabled={!isEditing}
                  value={profile.allergies}
                  onChange={(e) => setProfile({ ...profile, allergies: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Bệnh mãn tính</label>
                <Input
                  disabled={!isEditing}
                  value={profile.chronicConditions}
                  onChange={(e) => setProfile({ ...profile, chronicConditions: e.target.value })}
                />
              </div>
            </div>

            {isEditing && (
              <Button type="submit" className="w-full mt-4">
                Lưu thay đổi
              </Button>
            )}
          </CardContent>
        </Card>
      </form>
    </Page>
  );
};

export default ProfilePage;
