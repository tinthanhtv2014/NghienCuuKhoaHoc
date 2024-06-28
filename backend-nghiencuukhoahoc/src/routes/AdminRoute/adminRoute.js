const express = require("express");
const router = express.Router();
const {
  getAllTaiKhoanController,
  createTaiKhoanController,
  updateTaiKhoanController,
} = require("../../controllers/AdminController/adminController.js");

//login cho admin
// Phần hàm này đang có tranh cãi với Phúc 28/6/2024
const taiKhoanRote = (app) => {

  router.get("/tai-khoan", getAllTaiKhoanController);
  router.post("/tao-tai-khoan", createTaiKhoanController);
  router.put("/sua-tai-khoan/:tenDangNhap", updateTaiKhoanController);

  return app.use("/api/v1/taikhoan", router);
}


module.exports = taiKhoanRote;
