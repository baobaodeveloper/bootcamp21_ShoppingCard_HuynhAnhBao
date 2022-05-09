import React, { Component } from "react";

class PhoneList extends Component {
  render() {
    const mapStateToProps = (state) => ({
      product: state.phoneReducer.product,
    });
    console.log(this.state);
    return <div></div>;
  }
}

export default PhoneList;
