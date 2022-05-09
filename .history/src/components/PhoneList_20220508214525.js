import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PhoneDetail from "./PhoneDetail";
import PhoneItem from "./PhoneItem";
import PhoneShoppingCard from "./PhoneShoppingCard";

const mapStateToProps = (state) => {
  return {
    product: state.phoneReducer.product,
    detail: state.phoneReducer.detail,
    shopCardItem: state.phoneReducer.shopCardItem,
  };
};
class PhoneList extends Component {
  render() {
    console.log(this.props.shopCardItem);

    const shopCardItem = this.props.shopCardItem;

    const detail = this.props.detail;

    const [arrProduct] = this.props.product;

    if (arrProduct.length === 0) return null;
    return (
      <Fragment>
        <div className="container mt-4">
          <PhoneShoppingCard shopCardItem={shopCardItem}></PhoneShoppingCard>
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
