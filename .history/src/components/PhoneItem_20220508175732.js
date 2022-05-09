import React, { Component } from "react";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) => {
  return {
    product: (item) => {
      dispatch({
        type: "SHOW_DETAIL",
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
        <div className="card-body flex-1 mt-auto">
          <h5 className="card-title">{tenSP}</h5>

          <button
            onClick={() => this.props.product(this.props.item)}
            className="btn btn-primary mr-3"
          >
            Xem chi tiet
          </button>
          <button className="btn btn-danger">Them vao gio hang </button>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(PhoneItem);
