import React, { Component } from "react";
import { Modal, Button } from "antd";

export default class ModalGioHang extends Component {
  state = {
    isOpen: false,
  };
  setVisible = (param) => {
    this.setState({
      isOpen: param,
    });
  };
  renderDanhSachGioHang = () => {
    let { handleThayDoiSoLuong } = this.props;
    return this.props.dataGioHang.map((item) => {
      return (
        <tr>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img style={{ width: "50px" }} src={item.hinhAnh} alt="" />
          </td>
          <td>{item.giaBan}</td>
          <td>
            <button
              onClick={() => {
                handleThayDoiSoLuong(item.maSP, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <span>{item.soLuong}</span>
            <button
              onClick={() => {
                handleThayDoiSoLuong(item.maSP, +1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
        </tr>
      );
    });
  };

  renderTotalSanPham = () => {
    return this.props.dataGioHang.reduce((a, b) => {
      return a + b.soLuong;
    }, 0);
  };
  render() {
    console.log("dataGioHang", this.props.dataGioHang);
    return (
      <>
        <div
          style={{ display: "flex", justifyContent: "end", padding: "20px" }}
        >
          <Button
            className="mb-5 ml-auto "
            type="primary"
            onClick={() => this.setVisible(true)}
          >
            Giỏ hàng ({this.renderTotalSanPham()})
          </Button>
        </div>
        <Modal
          title="Giỏ hàng của bạn"
          centered
          visible={this.state.isOpen}
          onOk={() => this.setVisible(false)}
          onCancel={() => this.setVisible(false)}
          width={1000}
        >
          <table className="table">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
              </tr>
            </thead>
            <tbody>{this.renderDanhSachGioHang()}</tbody>
          </table>
        </Modal>
      </>
    );
  }
}
