import Layout from "@/components/layout";
import HomePage from "@/pages/home";
import AppointmentPage from "@/pages/appointment";
import AppointmentSuccessPage from "@/pages/appointment/success";
import DoctorListPage from "@/pages/doctors";
import DoctorDetailPage from "@/pages/doctors/detail";
import ProfilePage from "@/pages/profile";
import MedicalHistoryPage from "@/pages/medical-history";
import DiseaseSearchPage from "@/pages/disease-search";
import NewsPage from "@/pages/news";
import NewsDetailPage from "@/pages/news/[id]";
import MedicalPackagesPage from "@/pages/medical-packages";
import MedicalPackageDetail from "@/pages/medical-package-detail";
import { createBrowserRouter } from "react-router-dom";
import { getBasePath } from "@/utils/zma";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          handle: {
            logo: true,
          },
        },
        {
          path: "/medical-packages",
          element: <MedicalPackagesPage />,
          handle: {
            title: "Gói khám",
            backUrl: "/"
          },
        },
        {
          path: "/medical-packages/:id",
          element: <MedicalPackageDetail />,
          handle: {
            title: "Chi tiết gói khám",
            backUrl: "/medical-packages"
          },
        },
        {
          path: "/appointment",
          element: <AppointmentPage />,
          handle: {
            title: "Đặt lịch khám",
            backUrl: "/"
          },
        },
        {
          path: "/appointment/success",
          element: <AppointmentSuccessPage />,
          handle: {
            title: "Đặt lịch thành công",
            backUrl: "/appointment"
          },
        },
        {
          path: "/doctors",
          element: <DoctorListPage />,
          handle: {
            title: "Đội ngũ bác sĩ",
          },
        },
        {
          path: "/doctor/:id",
          element: <DoctorDetailPage />,
          handle: {
            title: ({ doctors, params }) =>
              doctors.find((d) => d.id === Number(params.id))?.name,
            backUrl: "/doctors"
          },
        },
        {
          path: "/profile",
          element: <ProfilePage />,
          handle: {
            logo: true,
            backUrl: "/"
          },
        },
        {
          path: "/medical-history",
          element: <MedicalHistoryPage />,
          handle: {
            title: "Lịch sử khám bệnh",
            backUrl: "/"
          },
        },
        {
          path: "/disease-search",
          element: <DiseaseSearchPage />,
          handle: {
            title: "Tra cứu bệnh",
            backUrl: "/"
          },
        },
        {
          path: "/news",
          element: <NewsPage />,
          handle: {
            title: "Tin tức y tế",
            backUrl: "/"
          },
        },
        {
          path: "/news/:id",
          element: <NewsDetailPage />,
          handle: {
            title: "Chi tiết tin tức",
            backUrl: "/news"
          },
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

export default router;
