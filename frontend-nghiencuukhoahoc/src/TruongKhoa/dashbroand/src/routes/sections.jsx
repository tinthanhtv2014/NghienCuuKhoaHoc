import { lazy, Suspense } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';
import ProductsPageFake from "../pages/products"
import DangKyGioChuan from '../sections/DangKyGioChuan/IndexDangKyGioChuan';
import AccountGV from '../sections/Account/AccountGV';

const FileExcel = lazy(() => import('../sections/FileExcel/FileExcel'));
const DangKyDanhMuc = lazy(() => import('../sections/DangKyDanhMuc/DangKyDanhMuc'));

const ChangePassword = lazy(() => import('../sections/changePassword/changePassword'));
const ChatAdmin = lazy(() => import('../sections/ChatAdmin/ChatAdmin'));
const OnlyChiTietHoaDon = lazy(() => import('../sections/ListOrders/ChiTietHoaDon/OnlyChiTietHoaDon'));
const ListOrdersChiTietHoaDon = lazy(() => import('../sections/ListOrders/ChiTietHoaDon/ListOrdersChiTietHoaDon'));
const ListOrdersDaHuy = lazy(() => import('../sections/ListOrders/ListOrdersDaHuy/ListOrdersDaHuy'));
const ListOrdersDaGiao = lazy(() => import('../sections/ListOrders/ListOrdersDaGiao/ListOrdersDaGiao'));
const ListOrdersPage = lazy(() => import('../pages/ListOrders'));

const TrangChu = lazy(() => import('../pages/app'));

const BlogPage = lazy(() => import('../pages/blog'));
const UserPage = lazy(() => import('../pages/user'));
const LoginPage = lazy(() => import('../pages/login'));
const Page404 = lazy(() => import('../pages/page-not-found'));

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',  //Trang chủ

      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <TrangChu />
          </Suspense>
        </DashboardLayout>
      )
    },

    {
      path: '/thong-ke',  //Trang chủ

      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <TrangChu />
          </Suspense>
        </DashboardLayout>
      )
    },

    {
      path: "/giang-vien", // Danh sách giảng viên trong khoa.

      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <UserPage />
          </Suspense>
        </DashboardLayout>
      ),
    },

    {
      path: '/dang-ky-khung-gio-chuan', //: Đăng Ký mức chuẩn giờ giảng
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <DangKyGioChuan />
          </Suspense>
        </DashboardLayout>
      )
    },

    {
      path: '/Dang-ky-danh-muc',
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <DangKyDanhMuc />
          </Suspense>
        </DashboardLayout>
      )
    },

    {
      path: '/test',
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <FileExcel />
          </Suspense>
        </DashboardLayout>
      )
    },


    //====================================================================================================

    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/404',
      element: <Page404 />
    },
    {
      path: '*',
      element: <Navigate to="/dashboard/404" replace />
    }

  ]);

  return routes;
}






