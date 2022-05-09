import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PhoneDetail from "./PhoneDetail";
import PhoneItem from "./PhoneItem";

const mapStateToProps = (state) => {
  return {
    product: state.phoneReducer.product,
    detail: state.phoneReducer.detail,
  };
};
class PhoneList extends Component {
  render() {
    const detail = this.props.detail;

    const [arrProduct] = this.props.product;

    if (arrProduct.length === 0) return null;
    return (
      <Fragment>
        <div className="container mt-4">
          <div
            style={{ width: "40px", marginLeft: "auto" }}
            className="position-relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="position-absolute">3</span>
          </div>
          <div className="row flex-nowrap">
            {arrProduct.map((item) => (
              <PhoneItem item={item} key={item.maSP}></PhoneItem>
            ))}
          </div>
        </div>
        <PhoneDetail detail={detail}></PhoneDetail>
      </Fragment>
    );
  }
}
export default connect(mapStateToProps, null)(PhoneList);
