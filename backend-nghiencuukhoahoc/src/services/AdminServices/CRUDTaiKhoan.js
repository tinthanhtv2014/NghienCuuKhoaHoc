const pool = require("../../config/database");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const { createJWT } = require("../../middlewares/JWTAction");

//hàm hash mật khẩu
const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  //let check = bcrypt.compareSync(password, hashPassword);
  return hashPassword;
};
//hàm ktr mật khẩu đã hash
const checkPassword = (inputpassword, hashpass) => {
  return bcrypt.compareSync(inputpassword, hashpass);
};

//hàm kiểm tra tài khoản
const checkTaiKhoanExists = async (tenDangnhap) => {
  try {
    const [results, fields] = await pool.execute(
      "SELECT * FROM TAIKHOAN WHERE TENDANGNHAP = ?",
      [tenDangnhap]
    );

    if (results.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("checkTaiKhoanExists errr >>>", error);
    return false;
  }
};

// =============================================================================================================================
//hàm chức năng
const getAllTaiKhoan = async () => {
  try {
    let [results, fields] = await pool.execute("select * from TAIKHOAN");
    return {
      EM: "xem thoong tin thanh cong",
      EC: 1,
      DT: results,
    };
  } catch (error) {
    return {
      EM: "không thể xem thông tin",
      EC: 0,
      DT: [],
    };
  }
};

const createTaiKhoan = async (tenDangnhap, matKhau, phanQuyen, trangThai) => {
  try {
    console.log("Checking if account exists...");
    let exists = await checkTaiKhoanExists(tenDangnhap);
    console.log("Account exists:", exists);

    if (exists === true) {
      return {
        EM: "tài khoản đã tồn tại không thể tạo thêm",
        EC: 0,
        DT: [],
      };
    }

    console.log("Hashing password...");
    let hashpass = await hashPassword(matKhau);
    console.log("Hashed password:", hashpass);

    console.log("Inserting into database...");
    let [results, fields] = await pool.execute(
      `INSERT INTO TAIKHOAN (TENDANGNHAP, MATKHAU, PHANQUYEN, TRANGTHAI) VALUES (?, ?, ?, ?)`,
      [tenDangnhap, hashpass, phanQuyen, trangThai]
    );

    console.log("Insert results:", results);

    return {
      EM: "tạo tài khoản thành công",
      EC: 1,
      DT: results,
    };
  } catch (error) {
    console.error("Error in createTaiKhoan:", error);
    return {
      EM: "lỗi services createTaiKhoan",
      EC: 1,
      DT: [],
    };
  }
};

const LoginTaikhoan = async (tenDangnhap, matKhau) => {
  try {
    const [results, fields] = await pool.execute(
      "SELECT * FROM `TAIKHOAN` WHERE `TENDANGNHAP` = ?",
      [tenDangnhap]
    );

    if (results.length > 0) {
      const isCorrectPass = await bcrypt.compare(matKhau, results[0].MATKHAU);

      if (isCorrectPass) {
        let payload = {
          taikhoan: results[0].TENDANGNHAP,
          matkhau: results[0].MATKHAU,
          phanquyen: results[0].PHANQUYEN,
        };
        let token = createJWT(payload);
        return {
          EM: "đăng nhập thành công",
          EC: 1,
          DT: {
            access_token: token,
            data: results,
          },
        };
      } else {
        return {
          EM: "đăng nhập thất bại, mật khẩu không đúng",
          EC: 0,
          DT: {
            access_token: null,
            data: [],
          },
        };
      }
    } else {
      return {
        EM: "đăng nhập thất bại, tài khoản không đúng",
        EC: 0,
        DT: {
          access_token: null,
          data: [],
        },
      };
    }
  } catch (error) {
    console.error("Error in LoginTaikhoan:", error);
    return {
      EM: "lỗi services LoginTaikhoan",
      EC: 1,
      DT: [],
    };
  }
};

const updateTaiKhoan = async (
  tenDangnhap,
  matKhaucu,
  matkhaumoi,
  phanQuyen,
  trangThai
) => {
  try {
    let [results1, fields1] = await pool.execute(
      "select * from taikhoan where TENDANGNHAP = ?",
      [tenDangnhap]
    );
    console.log(results1);
    if (results1.length > 0) {
      const isCorrectPass = await bcrypt.compare(
        matKhaucu,
        results1[0].MATKHAU
      );
      if (isCorrectPass) {
        let hashpass = await hashPassword(matkhaumoi);
        let [results, fields] = await pool.execute(
          `UPDATE taikhoan SET MATKHAU = ?, PHANQUYEN = ?, TRANGTHAI = ? WHERE TENDANGNHAP = ?`,
          [hashpass, phanQuyen, trangThai, tenDangnhap]
        );
        return {
          EM: "update thành công",
          EC: 0,
          DT: [],
        };
      }
      return {
        EM: "mật khẩu cũ không khớp không thể update",
        EC: 0,
        DT: [],
      };
    }
    return {
      EM: "tài khoản không tồn tại",
      EC: 0,
      DT: [],
    };
  } catch (error) {
    return {
      EM: "lỗi services createTaiKhoan",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = {
  getAllTaiKhoan,
  createTaiKhoan,
  updateTaiKhoan,

  LoginTaikhoan,
};
