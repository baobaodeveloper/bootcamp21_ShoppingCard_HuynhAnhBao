import React, { Component } from "react";

export default class PhoneShoppingCard extends Component {
  render() {
    const itemCard = this.props.shopCardItem;
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="{-1}"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered max-w-[800px]"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title text-2xl font-semibold"
                  id="exampleModalLongTitle"
                >
                  Giỏ hàng
                </h5>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Mã sản phẩm</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Đơn giá</th>
                      <th scope="col">Thành tiền</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemCard.length > 0 &&
                      itemCard.map((item) => (
                        <tr key={item.maSP}>
                          <td>{item.maSP}</td>
                          <td>
                            <img
                              className="max-w-[50px]"
                              src={item.hinhAnh}
                              alt=""
                            />
                          </td>
                          <td>{item.tenSP}</td>
                          <td>
                            <div className="flex items-center justify-between">
                              <button className="p-2 bg-blue-500 rounded outline-none text-white leading-none border-none">
                                +
                              </button>
                              <span>{item.qty}</span>
                              <button className="">-</button>
                            </div>
                          </td>
                          <td>{item.giaBan}</td>
                          <td>{item.qty * item.giaBan}</td>
                          <td>
                            <button className="btn btn-danger">Xóa</button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary bg-red-500"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative w-10 max-w-[40px] ml-auto cursor-pointer"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="{2}"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="absolute inline-block top-0 right-0 translate-x-8 -translate-y-3 text-sm border-2 p-[5px] rounded-full leading-none text-white bg-red-600">
            3
          </span>
        </div>
      </div>
    );
  }
}
