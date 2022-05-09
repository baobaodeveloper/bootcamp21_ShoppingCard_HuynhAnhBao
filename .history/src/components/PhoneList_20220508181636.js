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
        <div className="container ">
          <div className="row flex-nowrap">
            {arrProduct.map((item) => (
              <PhoneItem item={item} key={item.maSP}></PhoneItem>
            ))}
          </div>
        </div>
        <PhoneDetail></PhoneDetail>
      </Fragment>
    );
  }
}
export default connect(mapStateToProps, null)(PhoneList);
