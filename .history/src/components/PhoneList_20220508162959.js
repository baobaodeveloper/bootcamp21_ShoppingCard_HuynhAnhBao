import React, { Component } from "react";

class PhoneList extends Component {
  render() {
    const mapStateToProps = (state) => {
      return { product: state.phoneReducer.product };
    };
    console.log(mapStateToProps);
    return <div></div>;
  }
}

export default PhoneList;
