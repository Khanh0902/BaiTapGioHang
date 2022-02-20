import React, { Component } from "react";

export default class ItemDienThoai extends Component {
  render() {
    let { tenSP, hinhAnh } = this.props.data;
    let { handleOnclick, handleThemGioiHang } = this.props;
    return (
      <div className="card" style={{ width: "20%" }}>
        <img className="card-img-top" src={hinhAnh} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>

          <button
            onClick={() => {
              handleOnclick(this.props.data);
            }}
            className="btn btn-primary"
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-danger ml-2"
            onClick={() => {
              handleThemGioiHang(this.props.data);
            }}
          >
            Thêm giỏi hàng
          </button>
        </div>
      </div>
    );
  }
}
