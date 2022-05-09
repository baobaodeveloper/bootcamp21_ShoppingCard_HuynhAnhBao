import React, { Component } from "react";
import { connect } from "react-redux";
import PhoneItem from "./PhoneItem";

const mapStateToProps = (state) => {
  return { product: state.phoneReducer.product };
};
export class PhoneList extends Component {
  render() {
    const [arrProduct] = this.props.product;

    if (arrProduct.length === 0) return null;
    return (
      <div className="container ">
        <div className="row flex-nowrap">
          {arrProduct.map((item) => (
            <PhoneItem item={item} key={item.maSP}></PhoneItem>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(PhoneList);
