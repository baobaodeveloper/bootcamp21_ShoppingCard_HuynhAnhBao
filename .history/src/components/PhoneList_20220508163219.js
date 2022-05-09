import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { product: state.phoneReducer.product };
};
class PhoneList extends Component {
  render() {
    console.log(this.props);
    return <div></div>;
  }
}

export default connect(mapStateToProps, null)(PhoneList);
