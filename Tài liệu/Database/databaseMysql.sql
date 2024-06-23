/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     23/06/2024 5:14:30 pm                        */
/*==============================================================*/

/*==============================================================*/
/* Table: BANGPHANCONG                                          */
/*==============================================================*/
create table BANGPHANCONG
(
   MAPHANCONG           int not null  comment '',
   MAGV                 varchar(255) not null  comment '',
   THOIGIANLAP          date  comment '',
   primary key (MAPHANCONG)
);

/*==============================================================*/
/* Table: BAO_CAO_KET_THUC_MON                                  */
/*==============================================================*/
create table BAO_CAO_KET_THUC_MON
(
   MADANHGIAKETTHUC     int not null  comment '',
   MACHITIETPHANCONG    int not null  comment '',
   LANDANHGIA           int  comment '',
   NGAYDANHGIA          date  comment '',
   NGAYBAOCAOKETTHUC    date  comment '',
   TRANGTHAI            text  comment '',
   primary key (MADANHGIAKETTHUC, MACHITIETPHANCONG)
);

/*==============================================================*/
/* Table: BOMON                                                 */
/*==============================================================*/
create table BOMON
(
   MABOMON              int not null  comment '',
   MAKHOA               int not null  comment '',
   TENBOMON             text  comment '',
   primary key (MABOMON)
);

/*==============================================================*/
/* Table: CHITIETPHANCONG                                       */
/*==============================================================*/
create table CHITIETPHANCONG
(
   MACHITIETPHANCONG    int not null  comment '',
   MAMONHOC             int not null  comment '',
   MAPHANCONG           int not null  comment '',
   MALOP                varchar(255) not null  comment '',
   MAHKNK               int not null  comment '',
   THOIGIANBATDAUPHANCONG date  comment '',
   THOIGIANKETTHUCPHANCONG date  comment '',
   primary key (MACHITIETPHANCONG)
);

/*==============================================================*/
/* Table: CHON_KHUNG                                            */
/*==============================================================*/
create table CHON_KHUNG
(
   MAGV                 varchar(255) not null  comment '',
   MANAMHOC             int not null  comment '',
   MAKHUNG              int not null  comment '',
   primary key (MAGV, MANAMHOC, MAKHUNG)
);

/*==============================================================*/
/* Table: CHUCDANH                                              */
/*==============================================================*/
create table CHUCDANH
(
   MACHUCDANH           int not null  comment '',
   TENCHUCDANH          text  comment '',
   primary key (MACHUCDANH)
);

/*==============================================================*/
/* Table: CHUCVU                                                */
/*==============================================================*/
create table CHUCVU
(
   MACHUCVU             int not null  comment '',
   TENCHUCVU            text  comment '',
   primary key (MACHUCVU)
);

/*==============================================================*/
/* Table: CHUONGTRINHDAOTAO                                     */
/*==============================================================*/
create table CHUONGTRINHDAOTAO
(
   MACHUONGTRINH        int not null  comment '',
   MABOMON              int not null  comment '',
   TENCHUONGTRINH       text  comment '',
   primary key (MACHUONGTRINH)
);

/*==============================================================*/
/* Table: CO_CHUC_DANH                                          */
/*==============================================================*/
create table CO_CHUC_DANH
(
   MACHUCDANH           int not null  comment '',
   MAGV                 varchar(255) not null  comment '',
   THOIGIANNHAN         date  comment '',
   TRANGTHAI            text  comment '',
   primary key (MACHUCDANH, MAGV)
);

/*==============================================================*/
/* Table: DANHMUCQUYDOISPKHCN                                   */
/*==============================================================*/
create table DANHMUCQUYDOISPKHCN
(
   MADANHMUC            int not null  comment '',
   GIOQUYDOI            int  comment '',
   NOIDUNGDANHMUC       text  comment '',
   primary key (MADANHMUC)
);

/*==============================================================*/
/* Table: GIANGVIEN                                             */
/*==============================================================*/
create table GIANGVIEN
(
   MAGV                 varchar(255) not null  comment '',
   MABOMON              int not null  comment '',
   TENGV                varchar(100)  comment '',
   EMAIL                text  comment '',
   DIENTHOAI            varchar(50)  comment '',
   DIACHI               text  comment '',
   primary key (MAGV)
);

/*==============================================================*/
/* Table: GIU_CHUC_VU                                           */
/*==============================================================*/
create table GIU_CHUC_VU
(
   MAGV                 varchar(255) not null  comment '',
   MACHUCVU             int not null  comment '',
   SOQUYETDINH          varchar(255)  comment '',
   TUNGAY               date  comment '',
   primary key (MAGV, MACHUCVU)
);

/*==============================================================*/
/* Table: HINHTHUCDANHGIA                                       */
/*==============================================================*/
create table HINHTHUCDANHGIA
(
   MADANHGIAKETTHUC     int not null  comment '',
   TENDANHGIA           text  comment '',
   primary key (MADANHGIAKETTHUC)
);

/*==============================================================*/
/* Table: HOCKYNIENKHOA                                         */
/*==============================================================*/
create table HOCKYNIENKHOA
(
   MAHKNK               int not null  comment '',
   TENHKNK              text  comment '',
   NGAYBATDAUNIENKHOA   date  comment '',
   NGAYKETTHUCNIENKHOA  date  comment '',
   primary key (MAHKNK)
);

/*==============================================================*/
/* Table: KHOA                                                  */
/*==============================================================*/
create table KHOA
(
   MAKHOA               int not null  comment '',
   TENKHOA              text  comment '',
   primary key (MAKHOA)
);

/*==============================================================*/
/* Table: KHUNGGIOCHUAN                                         */
/*==============================================================*/
create table KHUNGGIOCHUAN
(
   MAKHUNG              int not null  comment '',
   MACHUCDANH           int not null  comment '',
   TENKHUNGCHUAN        text  comment '',
   GIOGIANGDAY          int  comment '',
   GIONGHIENCUUKHOAHOC  int  comment '',
   GIOPHUCVUCONGDONG    int  comment '',
   primary key (MAKHUNG)
);

/*==============================================================*/
/* Table: LOP                                                   */
/*==============================================================*/
create table LOP
(
   MALOP                varchar(255) not null  comment '',
   MACHUONGTRINH        int not null  comment '',
   TENLOP               text  comment '',
   NAMTUYENSINH         int  comment '',
   SISO                 int  comment '',
   primary key (MALOP)
);

/*==============================================================*/
/* Table: MONHOC                                                */
/*==============================================================*/
create table MONHOC
(
   MAMONHOC             int not null  comment '',
   TENMONHOC            text  comment '',
   SOTINCHILYTHUYET     int  comment '',
   SOTINCHITHUCHANH     int  comment '',
   primary key (MAMONHOC)
);

/*==============================================================*/
/* Table: NAMHOC                                                */
/*==============================================================*/
create table NAMHOC
(
   MANAMHOC             int not null  comment '',
   TENNAMHOC            text  comment '',
   primary key (MANAMHOC)
);

/*==============================================================*/
/* Table: TAIKHOAN                                              */
/*==============================================================*/
create table TAIKHOAN
(
   TENDANGNHAP          varchar(255) not null  comment '',
   MAGV                 varchar(255) not null  comment '',
   MATKHAU              text  comment '',
   PHANQUYEN            text  comment '',
   primary key (TENDANGNHAP)
);

/*==============================================================*/
/* Table: THUOC                                                 */
/*==============================================================*/
create table THUOC
(
   MACHUONGTRINH        int not null  comment '',
   MAMONHOC             int not null  comment '',
   SOTHUTUHOCKI         int  comment '',
   primary key (MACHUONGTRINH, MAMONHOC)
);

/*==============================================================*/
/* Table: _ANG_KY_THUC_HIEN_QUY__OI                             */
/*==============================================================*/
create table _ANG_KY_THUC_HIEN_QUY__OI
(
   MADANHMUC            int not null  comment '',
   MAGV                 varchar(255) not null  comment '',
   MANAMHOC             int not null  comment '',
   SOGIOQUYDOI          int  comment '',
   TRANGTHAI            text  comment '',
   primary key (MADANHMUC, MAGV, MANAMHOC)
);




alter table BANGPHANCONG add constraint FK_BANGPHAN__UOC_PHAN_GIANGVIE foreign key (MAGV)
      references GIANGVIEN (MAGV) on delete restrict on update restrict;

alter table BAO_CAO_KET_THUC_MON add constraint FK_BAO_CAO__BAO_CAO_K_HINHTHUC foreign key (MADANHGIAKETTHUC)
      references HINHTHUCDANHGIA (MADANHGIAKETTHUC) on delete restrict on update restrict;

alter table BAO_CAO_KET_THUC_MON add constraint FK_BAO_CAO__BAO_CAO_K_CHITIETP foreign key (MACHITIETPHANCONG)
      references CHITIETPHANCONG (MACHITIETPHANCONG) on delete restrict on update restrict;

alter table BOMON add constraint FK_BOMON_THUOC_KHO_KHOA foreign key (MAKHOA)
      references KHOA (MAKHOA) on delete restrict on update restrict;

alter table CHITIETPHANCONG add constraint FK_CHITIETP_CO_BANGPHAN foreign key (MAPHANCONG)
      references BANGPHANCONG (MAPHANCONG) on delete restrict on update restrict;

alter table CHITIETPHANCONG add constraint FK_CHITIETP_PHAN_CONG_LOP foreign key (MALOP)
      references LOP (MALOP) on delete restrict on update restrict;

alter table CHITIETPHANCONG add constraint FK_CHITIETP_PHAN_CONG_HOCKYNIE foreign key (MAHKNK)
      references HOCKYNIENKHOA (MAHKNK) on delete restrict on update restrict;

alter table CHITIETPHANCONG add constraint FK_CHITIETP_PHAN_CONG_MONHOC foreign key (MAMONHOC)
      references MONHOC (MAMONHOC) on delete restrict on update restrict;

alter table CHON_KHUNG add constraint FK_CHON_KHU_CHON_KHUN_GIANGVIE foreign key (MAGV)
      references GIANGVIEN (MAGV) on delete restrict on update restrict;

alter table CHON_KHUNG add constraint FK_CHON_KHU_CHON_KHUN_NAMHOC foreign key (MANAMHOC)
      references NAMHOC (MANAMHOC) on delete restrict on update restrict;

alter table CHON_KHUNG add constraint FK_CHON_KHU_CHON_KHUN_KHUNGGIO foreign key (MAKHUNG)
      references KHUNGGIOCHUAN (MAKHUNG) on delete restrict on update restrict;

alter table CHUONGTRINHDAOTAO add constraint FK_CHUONGTR_THUOC_CHU_BOMON foreign key (MABOMON)
      references BOMON (MABOMON) on delete restrict on update restrict;

alter table CO_CHUC_DANH add constraint FK_CO_CHUC__CO_CHUC_D_CHUCDANH foreign key (MACHUCDANH)
      references CHUCDANH (MACHUCDANH) on delete restrict on update restrict;

alter table CO_CHUC_DANH add constraint FK_CO_CHUC__CO_CHUC_D_GIANGVIE foreign key (MAGV)
      references GIANGVIEN (MAGV) on delete restrict on update restrict;

alter table GIANGVIEN add constraint FK_GIANGVIE_THUOC_BO__BOMON foreign key (MABOMON)
      references BOMON (MABOMON) on delete restrict on update restrict;

alter table GIU_CHUC_VU add constraint FK_GIU_CHUC_GIU_CHUC__GIANGVIE foreign key (MAGV)
      references GIANGVIEN (MAGV) on delete restrict on update restrict;

alter table GIU_CHUC_VU add constraint FK_GIU_CHUC_GIU_CHUC__CHUCVU foreign key (MACHUCVU)
      references CHUCVU (MACHUCVU) on delete restrict on update restrict;

alter table KHUNGGIOCHUAN add constraint FK_KHUNGGIO_CO_KHUNG__CHUCDANH foreign key (MACHUCDANH)
      references CHUCDANH (MACHUCDANH) on delete restrict on update restrict;

alter table LOP add constraint FK_LOP_HOC_CHUONGTR foreign key (MACHUONGTRINH)
      references CHUONGTRINHDAOTAO (MACHUONGTRINH) on delete restrict on update restrict;

alter table TAIKHOAN add constraint FK_TAIKHOAN_TAI_KHOAN_GIANGVIE foreign key (MAGV)
      references GIANGVIEN (MAGV) on delete restrict on update restrict;

alter table THUOC add constraint FK_THUOC_THUOC_CHUONGTR foreign key (MACHUONGTRINH)
      references CHUONGTRINHDAOTAO (MACHUONGTRINH) on delete restrict on update restrict;

alter table THUOC add constraint FK_THUOC_THUOC2_MONHOC foreign key (MAMONHOC)
      references MONHOC (MAMONHOC) on delete restrict on update restrict;

alter table _ANG_KY_THUC_HIEN_QUY__OI add constraint FK__ANG_KY___ANG_KY_T_DANHMUCQ foreign key (MADANHMUC)
      references DANHMUCQUYDOISPKHCN (MADANHMUC) on delete restrict on update restrict;

alter table _ANG_KY_THUC_HIEN_QUY__OI add constraint FK__ANG_KY___ANG_KY_T_GIANGVIE foreign key (MAGV)
      references GIANGVIEN (MAGV) on delete restrict on update restrict;

alter table _ANG_KY_THUC_HIEN_QUY__OI add constraint FK__ANG_KY___ANG_KY_T_NAMHOC foreign key (MANAMHOC)
      references NAMHOC (MANAMHOC) on delete restrict on update restrict;




alter table BANGPHANCONG 
   drop foreign key FK_BANGPHAN__UOC_PHAN_GIANGVIE;

alter table BAO_CAO_KET_THUC_MON 
   drop foreign key FK_BAO_CAO__BAO_CAO_K_HINHTHUC;

alter table BAO_CAO_KET_THUC_MON 
   drop foreign key FK_BAO_CAO__BAO_CAO_K_CHITIETP;

alter table BOMON 
   drop foreign key FK_BOMON_THUOC_KHO_KHOA;

alter table CHITIETPHANCONG 
   drop foreign key FK_CHITIETP_CO_BANGPHAN;

alter table CHITIETPHANCONG 
   drop foreign key FK_CHITIETP_PHAN_CONG_LOP;

alter table CHITIETPHANCONG 
   drop foreign key FK_CHITIETP_PHAN_CONG_HOCKYNIE;

alter table CHITIETPHANCONG 
   drop foreign key FK_CHITIETP_PHAN_CONG_MONHOC;

alter table CHON_KHUNG 
   drop foreign key FK_CHON_KHU_CHON_KHUN_GIANGVIE;

alter table CHON_KHUNG 
   drop foreign key FK_CHON_KHU_CHON_KHUN_NAMHOC;

alter table CHON_KHUNG 
   drop foreign key FK_CHON_KHU_CHON_KHUN_KHUNGGIO;

alter table CHUONGTRINHDAOTAO 
   drop foreign key FK_CHUONGTR_THUOC_CHU_BOMON;

alter table CO_CHUC_DANH 
   drop foreign key FK_CO_CHUC__CO_CHUC_D_CHUCDANH;

alter table CO_CHUC_DANH 
   drop foreign key FK_CO_CHUC__CO_CHUC_D_GIANGVIE;

alter table GIANGVIEN 
   drop foreign key FK_GIANGVIE_THUOC_BO__BOMON;

alter table GIU_CHUC_VU 
   drop foreign key FK_GIU_CHUC_GIU_CHUC__GIANGVIE;

alter table GIU_CHUC_VU 
   drop foreign key FK_GIU_CHUC_GIU_CHUC__CHUCVU;

alter table KHUNGGIOCHUAN 
   drop foreign key FK_KHUNGGIO_CO_KHUNG__CHUCDANH;

alter table LOP 
   drop foreign key FK_LOP_HOC_CHUONGTR;

alter table TAIKHOAN 
   drop foreign key FK_TAIKHOAN_TAI_KHOAN_GIANGVIE;

alter table THUOC 
   drop foreign key FK_THUOC_THUOC_CHUONGTR;

alter table THUOC 
   drop foreign key FK_THUOC_THUOC2_MONHOC;

alter table _ANG_KY_THUC_HIEN_QUY__OI 
   drop foreign key FK__ANG_KY___ANG_KY_T_DANHMUCQ;

alter table _ANG_KY_THUC_HIEN_QUY__OI 
   drop foreign key FK__ANG_KY___ANG_KY_T_GIANGVIE;

alter table _ANG_KY_THUC_HIEN_QUY__OI 
   drop foreign key FK__ANG_KY___ANG_KY_T_NAMHOC;


alter table BANGPHANCONG 
   drop foreign key FK_BANGPHAN__UOC_PHAN_GIANGVIE;

drop table if exists BANGPHANCONG;


alter table BAO_CAO_KET_THUC_MON 
   drop foreign key FK_BAO_CAO__BAO_CAO_K_HINHTHUC;

alter table BAO_CAO_KET_THUC_MON 
   drop foreign key FK_BAO_CAO__BAO_CAO_K_CHITIETP;

drop table if exists BAO_CAO_KET_THUC_MON;


alter table BOMON 
   drop foreign key FK_BOMON_THUOC_KHO_KHOA;

drop table if exists BOMON;


alter table CHITIETPHANCONG 
   drop foreign key FK_CHITIETP_CO_BANGPHAN;

alter table CHITIETPHANCONG 
   drop foreign key FK_CHITIETP_PHAN_CONG_LOP;

alter table CHITIETPHANCONG 
   drop foreign key FK_CHITIETP_PHAN_CONG_HOCKYNIE;

alter table CHITIETPHANCONG 
   drop foreign key FK_CHITIETP_PHAN_CONG_MONHOC;

drop table if exists CHITIETPHANCONG;


alter table CHON_KHUNG 
   drop foreign key FK_CHON_KHU_CHON_KHUN_GIANGVIE;

alter table CHON_KHUNG 
   drop foreign key FK_CHON_KHU_CHON_KHUN_NAMHOC;

alter table CHON_KHUNG 
   drop foreign key FK_CHON_KHU_CHON_KHUN_KHUNGGIO;

drop table if exists CHON_KHUNG;

drop table if exists CHUCDANH;

drop table if exists CHUCVU;


alter table CHUONGTRINHDAOTAO 
   drop foreign key FK_CHUONGTR_THUOC_CHU_BOMON;

drop table if exists CHUONGTRINHDAOTAO;


alter table CO_CHUC_DANH 
   drop foreign key FK_CO_CHUC__CO_CHUC_D_CHUCDANH;

alter table CO_CHUC_DANH 
   drop foreign key FK_CO_CHUC__CO_CHUC_D_GIANGVIE;

drop table if exists CO_CHUC_DANH;

drop table if exists DANHMUCQUYDOISPKHCN;


alter table GIANGVIEN 
   drop foreign key FK_GIANGVIE_THUOC_BO__BOMON;

drop table if exists GIANGVIEN;


alter table GIU_CHUC_VU 
   drop foreign key FK_GIU_CHUC_GIU_CHUC__GIANGVIE;

alter table GIU_CHUC_VU 
   drop foreign key FK_GIU_CHUC_GIU_CHUC__CHUCVU;

drop table if exists GIU_CHUC_VU;

drop table if exists HINHTHUCDANHGIA;

drop table if exists HOCKYNIENKHOA;

drop table if exists KHOA;


alter table KHUNGGIOCHUAN 
   drop foreign key FK_KHUNGGIO_CO_KHUNG__CHUCDANH;

drop table if exists KHUNGGIOCHUAN;


alter table LOP 
   drop foreign key FK_LOP_HOC_CHUONGTR;

drop table if exists LOP;

drop table if exists MONHOC;

drop table if exists NAMHOC;


alter table TAIKHOAN 
   drop foreign key FK_TAIKHOAN_TAI_KHOAN_GIANGVIE;

drop table if exists TAIKHOAN;


alter table THUOC 
   drop foreign key FK_THUOC_THUOC_CHUONGTR;

alter table THUOC 
   drop foreign key FK_THUOC_THUOC2_MONHOC;

drop table if exists THUOC;


alter table _ANG_KY_THUC_HIEN_QUY__OI 
   drop foreign key FK__ANG_KY___ANG_KY_T_DANHMUCQ;

alter table _ANG_KY_THUC_HIEN_QUY__OI 
   drop foreign key FK__ANG_KY___ANG_KY_T_GIANGVIE;

alter table _ANG_KY_THUC_HIEN_QUY__OI 
   drop foreign key FK__ANG_KY___ANG_KY_T_NAMHOC;

drop table if exists _ANG_KY_THUC_HIEN_QUY__OI;

