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
const mapStatusToProps = (state) => {
  return {
    product: state.phoneReducer.product,
  };
};

class PhoneItem extends Component {
  render() {
    console.log(this.props.product);
    const { hinhAnh, tenSP } = this.props.item;
    return (
      <div className="m-4 card d-flex flex-column" style={{ width: "35rem" }}>
        <img src={hinhAnh} className="card-img-top h-75" alt="..." />
        <div className="flex-1 mt-auto text-center card-body">
          <h5 className="text-2xl font-semibold card-title">{tenSP}</h5>

          <button
            onClick={() => this.props.detail(this.props.item)}
            className="mr-3 btn btn-primary"
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
