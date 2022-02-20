import React, { Component } from "react";
import ItemDienThoai from "./ItemDienThoai";

export default class DanhSachDienThoai extends Component {
  renderDSDT = () => {
    return this.props.dsdt.map((item, index) => {
      return (
        <ItemDienThoai
          handleOnclick={this.props.handleSanPhamChiTiet}
          key={index}
          data={item}
          handleThemGioiHang={this.props.handleThemGioHang}
        />
      );
    });
  };
  render() {
    return (
      <div className="d-flex  justify-content-around">{this.renderDSDT()}</div>
    );
  }
}
