import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { product: state.phoneReducer.product };
};
class PhoneList extends Component {
  render() {
    const arrProduct = this.props.product;
    if (arrProduct.length === 0) return null;
    return (
      <div class="container">
        <div class="row">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(PhoneList);
