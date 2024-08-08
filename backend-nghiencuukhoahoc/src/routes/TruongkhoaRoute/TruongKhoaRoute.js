const express = require("express");
const app = express();

const router = express.Router();

const {
    GiangVien_thuoc_KhoaController,
} = require("../../controllers/TruongkhoaController/TruongKhoaController");

const {
    LoaiDanhMucExcelController,
    DanhMucExcelController,
    TyLeExcelController
} = require("../../controllers/TruongkhoaController/testControler");

const TruongKhoaRoute = (app) => {

    router.get("/xem", GiangVien_thuoc_KhoaController);

    router.post("/test/tao/excel", TyLeExcelController);

    return app.use("/api/v1/truongkhoa", router);
};

module.exports = TruongKhoaRoute;
