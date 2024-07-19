import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import GV_Hang_III from "./page/GV_Hang_III";
import TroGiang from "./page/TroGiang";
import GV_CaoCap_Hang_I from "./page/GV_CaoCap_Hang_I";
import GV_Chinh_Hang_II from "./page/GV_Chinh_Hang_II";
import GV_TapSu from "./page/GV_TapSu";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const DangKyGioChuan = () => {
  const [giangVien, setGiangVien] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [TenDangNhapGV, setTenDangNhapGV] = useState(null);
  const [ChucDanhGiangVien, setChucDanhGiangVien] = useState(null);
  const [isGVCaoCapHangI, setIsGVCaoCapHangI] = useState(false);
  const [isGVChinhHangII, setIsGVChinhHangII] = useState(false);
  const [isGVHangIII, setIsGVHangIII] = useState(false);
  const [isTroGiang, setIsTroGiang] = useState(false);
  const [isGVTapSu, setIsGVTapSu] = useState(false);
  const [MaGV, setMaGV] = useState(null);
  const CookiesAxios = axios.create({
    withCredentials: true, // Đảm bảo gửi cookie với mỗi yêu cầu
  });
  const navigate = useNavigate();
  useEffect(() => {
    const auth = Cookies.get("accessToken");
    const decodeAuth = jwtDecode(auth);
    console.log(decodeAuth);
    setTenDangNhapGV(decodeAuth.taikhoan);
    fetchDataGV(decodeAuth.taikhoan);
  }, []);
  const CallbackAPiProfileGV = () => {
    fetchDataGV(TenDangNhapGV);
  };
  const fetchDataGV = async (taikhoan) => {
    try {
      const response = await CookiesAxios.get(
        `${process.env.REACT_APP_URL_SERVER}/api/v1/admin/giangvien/only/xemprofile/${taikhoan}`
      );

      console.log("Danh sách tài khoản:", response.data.DT);

      if (response.data.EC === 1) {
        setGiangVien(response.data.DT);
        setChucDanhGiangVien(response.data.DT.TENCHUCDANH);
        setMaGV(response.data.DT.MAGV);
        if (response.data.DT.TENCHUCDANH == "Giảng viên (Hạng III)") {
          setIsGVHangIII(true);
          setLoading(false);
        } else if (
          response.data.DT.TENCHUCDANH == "Giảng viên cao cấp (Hạng I)"
        ) {
          setIsGVCaoCapHangI(true);
          setLoading(false);
        } else if (
          response.data.DT.TENCHUCDANH == "Giảng viên chính (Hạng II)"
        ) {
          setIsGVChinhHangII(true);
          setLoading(false);
        } else if (response.data.DT.TENCHUCDANH == "Trợ Giảng") {
          setIsTroGiang(true);
          setLoading(false);
        } else if (response.data.DT.TENCHUCDANH == "Giảng viên Tập sự") {
          setIsGVTapSu(true);
          setLoading(false);
        }
      } else {
        setLoading(true);
      }
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu bộ môn:", error);
    }
  };
  const handleMoveProfileGV = () => {
    navigate("/admin/account-giangvien");
  };
  if (isGVHangIII) {
    return <GV_Hang_III ChucDanhGiangVien={ChucDanhGiangVien} MaGV={MaGV} />;
  }
  if (isTroGiang) {
    return <TroGiang ChucDanhGiangVien={ChucDanhGiangVien} MaGV={MaGV} />;
  }

  if (isGVCaoCapHangI) {
    return (
      <GV_CaoCap_Hang_I ChucDanhGiangVien={ChucDanhGiangVien} MaGV={MaGV} />
    );
  }
  if (isGVChinhHangII) {
    return (
      <GV_Chinh_Hang_II ChucDanhGiangVien={ChucDanhGiangVien} MaGV={MaGV} />
    );
  }
  if (isGVTapSu) {
    return <GV_TapSu ChucDanhGiangVien={ChucDanhGiangVien} MaGV={MaGV} />;
  }

  return (
    <Typography>
      Hãy Cập Nhật Chức Danh Để Đăng Ký Khung Giờ Chuẩn{" "}
      <Button variant="outlined" onClick={handleMoveProfileGV}>
        Cập Nhật Chức Danh <i class="fa-solid fa-right-long ml-4"></i>
      </Button>{" "}
    </Typography>
  );
};

export default DangKyGioChuan;
