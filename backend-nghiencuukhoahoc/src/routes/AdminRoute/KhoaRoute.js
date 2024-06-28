const express = require("express");
const router = express.Router();
const {
  getAllKHOA,
  createKHOA,
  updateKHOA,
  deleteKHOA,
} = require("../../controllers/AdminController/khoaAdminCONTROLLER");

//login cho admin
const khoaRouter = (app) => {

  router.get("/xem", getAllKHOA);
  router.post("/tao", createKHOA);
  router.put("/sua/:makhoa", updateKHOA);
  router.delete("/xoa", deleteKHOA);

  return app.use("/api/v1/khoa", router);
}

module.exports = khoaRouter;
