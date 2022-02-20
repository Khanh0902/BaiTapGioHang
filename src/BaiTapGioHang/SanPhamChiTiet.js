import React, { Component } from "react";

export default class SanPhamChiTiet extends Component {
  render() {
    let { hinhAnh, heDieuHanh, tenSP, giaBan } = this.props.data;
    return (
      <div className="row">
        <div className="col-5">
          <img
            style={{
              width: "300xp",
              height: "400px",
              objectFit: "cover",
            }}
            src={hinhAnh}
          />
        </div>
        <div className="col-7 p-5">
          <p>Hệ điều hành: {heDieuHanh}</p>
          <p>Tên điện thoại: {tenSP}</p>
          <p>Giá bán: {giaBan}</p>
        </div>
      </div>
    );
  }
}
