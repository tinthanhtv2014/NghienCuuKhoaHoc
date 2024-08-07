const {
  timChucDanh_TENCHUCDANH,
  timKhungGioChuan_TENCHUCDANH,
  tao_CHONKHUNG,
  xem_CHONKHUNG_cho_GIANGVIEN,
  sua_CHONKHUNG_cho_GIANGVIEN,
  timAllTenKhung_TENCHUCDANH,
  tao_THOIGIAN_CHONKHUNG,
  sua_THOIGIAN_CHONKHUNG,
  tim_THOIGIAN_CHONKHUNG,
  tim_THOIGIAN_CHONKHUNG_theoTENKHOA,
  delete_THOIGIAN_CHONKHUNG,
} = require("../../services/GiangvienServices/ServiceChonKhung");

const select_CHONKHUNG = async (req, res) => {
  try {
    const MAGV = req.body.MAGV;
    const TENNAMHOC = req.body.TENNAMHOC;
    // console.log("TENNAMHOC", TENNAMHOC);
    // console.log("MAGV", MAGV);
    let results = await xem_CHONKHUNG_cho_GIANGVIEN(MAGV, TENNAMHOC);
    return res.status(200).json({
      EM: results.EM,
      EC: results.EC,
      DT: results.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Đã xảy ra lỗi máy chủ",
      EC: 500,
      DT: null,
    });
  }
};

const create_CHONKHUNG = async (req, res) => {
  try {
    // console.log("check Khung: ", req.body)
    const MAGV = req.body.MAGV;
    const TENNAMHOC = req.body.TENNAMHOC;
    const MAKHUNG = req.body.MAKHUNG;
    let results = await tao_CHONKHUNG(MAGV, TENNAMHOC, MAKHUNG);
    return res.status(200).json({
      EM: results.EM,
      EC: results.EC,
      DT: results.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Đã xảy ra lỗi máy chủ",
      EC: 500,
      DT: null,
    });
  }
};

const update_CHONKHUNG = async (req, res) => {
  try {
    const MAGV = req.params.MAGV;
    const TENNAMHOC = req.body.TENNAMHOC;
    const MAKHUNG = req.body.MAKHUNG;
    // console.log("check 1: ", MAGV);
    // console.log("check 2: ", MANAMHOC);
    // console.log("check 3: ", MAKHUNG);
    let results = await sua_CHONKHUNG_cho_GIANGVIEN(MAGV, TENNAMHOC, MAKHUNG);
    return res.status(200).json({
      EM: results.EM,
      EC: results.EC,
      DT: results.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Đã xảy ra lỗi máy chủ",
      EC: 500,
      DT: null,
    });
  }
};

const create_THOIGIAN_XACNHAN = async (req, res) => {
  try {
    const THOIGIANBATDAU = req.body.THOIGIANBATDAU;
    const THOIGIANKETTHUC = req.body.THOIGIANKETTHUC;
    const TENKHOA = req.body.TENKHOA;
    let results = await tao_THOIGIAN_CHONKHUNG(
      THOIGIANBATDAU,
      THOIGIANKETTHUC,
      TENKHOA
    );
    return res.status(200).json({
      EM: results.EM,
      EC: results.EC,
      DT: results.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Đã xảy ra lỗi máy chủ",
      EC: 500,
      DT: null,
    });
  }
};

const update_THOIGIAN_XACNHAN = async (req, res) => {
  try {
    const SONGAYKETTHUC = req.params.SONGAYKETTHUC;

    let results = await sua_THOIGIAN_CHONKHUNG(SONGAYKETTHUC);
    return res.status(200).json({
      EM: results.EM,
      EC: results.EC,
      DT: results.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Đã xảy ra lỗi máy chủ",
      EC: 500,
      DT: null,
    });
  }
};

const xem_THOIGIAN_XACNHAN = async (req, res) => {
  try {
    let results = await tim_THOIGIAN_CHONKHUNG();
    return res.status(200).json({
      EM: results.EM,
      EC: results.EC,
      DT: results.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Đã xảy ra lỗi máy chủ",
      EC: 500,
      DT: null,
    });
  }
};

const xem_THOIGIAN_XACNHAN_theoTENKHOA = async (req, res) => {
  const tenKhoa = req.params.tenKhoa; // Lấy tên khoa từ params
  try {
    let results = await tim_THOIGIAN_CHONKHUNG_theoTENKHOA(tenKhoa);
    return res.status(200).json({
      EM: results.EM,
      EC: results.EC,
      DT: results.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Đã xảy ra lỗi máy chủ",
      EC: 500,
      DT: null,
    });
  }
};

const delete_THOIGIAN_XACNHAN = async (req, res) => {
  const TENKHOA = req.body.TENKHOA;
  try {
    let results = await delete_THOIGIAN_CHONKHUNG(TENKHOA);
    return res.status(200).json({
      EM: results.EM,
      EC: results.EC,
      DT: results.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Đã xảy ra lỗi máy chủ",
      EC: 500,
      DT: null,
    });
  }
};

module.exports = {
  create_CHONKHUNG,
  select_CHONKHUNG,
  update_CHONKHUNG,
  create_THOIGIAN_XACNHAN,
  update_THOIGIAN_XACNHAN,
  xem_THOIGIAN_XACNHAN,
  xem_THOIGIAN_XACNHAN_theoTENKHOA,
  delete_THOIGIAN_XACNHAN,
};
