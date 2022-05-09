import React, { Component } from "react";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) => {
  return {
    detail: (item) => {
      dispatch({
        type: "SHOW_DETAIL",
        item,
      });
    },
    shopCardItem: (item) => {
      dispatch({
        type: "ADD_SHOPPING_CARD",
        item,
      });
    },
  };
};
class PhoneItem extends Component {
  render() {
    const { hinhAnh, tenSP } = this.props.item;
    return (
      <div className="card m-4 d-flex flex-column" style={{ width: "35rem" }}>
        <img src={hinhAnh} className="card-img-top h-75" alt="..." />
        <div className="card-body flex-1 mt-auto text-center">
          <h5 className="card-title">{tenSP}</h5>

          <button
            onClick={() => this.props.detail(this.props.item)}
            className="btn btn-primary mr-3"
          >
            Xem chi tiet
          </button>
          <button
            onClick={() => this.props.shopCardItem(this.props.item)}
            className="btn btn-danger"
          >
            Them vao gio hang{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(PhoneItem);
