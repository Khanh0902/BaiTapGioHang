import React, { Component } from "react";
import DanhSachDienThoai from "./DanhSachDienThoai";
import { danhSachDienThoai } from "./data";
import ModalGioHang from "./ModalGioHang";
import SanPhamChiTiet from "./SanPhamChiTiet";

export default class BaiTapGioHang extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
    gioHang: [],
  };
  handleThemSanPham = (sanPham) => {
    let cloneGioHang = [...this.state.gioHang];

    let indexSanPham = this.state.gioHang.findIndex((item) => {
      return item.maSP == sanPham.maSP;
    });
    if (indexSanPham == -1) {
      sanPham.soLuong = 1;
      cloneGioHang.push(sanPham);
    } else {
      cloneGioHang[indexSanPham].soLuong++;
    }
    this.setState({
      gioHang: cloneGioHang,
    });
  };

  handleSanPhamChiTiet = (sanPham) => {
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };

  handleThayDoiSoLuong = (id, type) => {
    let cloneGioHang = [...this.state.gioHang];
    let indexSanPham = this.state.gioHang.findIndex((item) => item.maSP == id);
    if (indexSanPham !== -1 && type == 1) {
      cloneGioHang[indexSanPham].soLuong++;
    }
    if (indexSanPham !== -1 && type == -1) {
      if (cloneGioHang[indexSanPham].soLuong === 1) {
        cloneGioHang.splice(indexSanPham, 1);
      } else {
        cloneGioHang[indexSanPham].soLuong--;
      }
    }

    this.setState({ gioHang: cloneGioHang });
  };
  render() {
    return (
      <div className="py-5">
        <ModalGioHang
          dataGioHang={this.state.gioHang}
          handleThayDoiSoLuong={this.handleThayDoiSoLuong}
        />
        <DanhSachDienThoai
          dsdt={danhSachDienThoai}
          handleSanPhamChiTiet={this.handleSanPhamChiTiet}
          handleThemGioHang={this.handleThemSanPham}
        />
        <SanPhamChiTiet data={this.state.sanPhamChiTiet} />
      </div>
    );
  }
}
