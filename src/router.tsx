import Layout from "@/components/layout";
import HomePage from "@/pages/home";
import AppointmentPage from "@/pages/appointment";
import DoctorListPage from "@/pages/doctors";
import DoctorDetailPage from "@/pages/doctors/detail";
import ProfilePage from "@/pages/profile";
import MedicalHistoryPage from "@/pages/medical-history";
import DiseaseSearchPage from "@/pages/disease-search";
import NewsPage from "@/pages/news";
import NewsDetailPage from "@/pages/news/[id]";
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
          path: "/appointment",
          element: <AppointmentPage />,
          handle: {
            title: "Đặt lịch khám",
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
          },
        },
        {
          path: "/profile",
          element: <ProfilePage />,
          handle: {
            logo: true,
          },
        },
        {
          path: "/medical-history",
          element: <MedicalHistoryPage />,
          handle: {
            title: "Lịch sử khám bệnh",
          },
        },
        {
          path: "/disease-search",
          element: <DiseaseSearchPage />,
          handle: {
            title: "Tra cứu bệnh",
          },
        },
        {
          path: "/news",
          element: <NewsPage />,
          handle: {
            title: "Tin tức y tế",
          },
        },
        {
          path: "/news/:id",
          element: <NewsDetailPage />,
          handle: {
            title: "Chi tiết tin tức",
          },
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

export default router;
