import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PhoneDetail from "./PhoneDetail";
import PhoneItem from "./PhoneItem";
import PhoneShoppingCard from "./PhoneShoppingCard";

const mapStateToProps = (state) => {
  return {
    shopCardItem: state.phoneReducer.shopCardItem,
  };
};
class PhoneList extends Component {
  render() {
    const shopCardItem = this.props.shopCardItem;

    return (
      <Fragment>
        <div className="container mt-4">
          <PhoneShoppingCard shopCardItem={shopCardItem}></PhoneShoppingCard>

          <div className="row flex-nowrap">
            <PhoneItem></PhoneItem>
            {/* {arrProduct.map((item) => (
              <PhoneItem item={item} key={item.maSP}></PhoneItem>
            ))} */}
          </div>
        </div>
        <PhoneDetail></PhoneDetail>
      </Fragment>
    );
  }
}
export default connect(mapStateToProps, null)(PhoneList);
