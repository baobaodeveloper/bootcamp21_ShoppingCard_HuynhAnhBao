import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { detail: state.phoneReducer.detail };
};

class PhoneDetail extends Component {
  render() {
    return <div></div>;
  }
}

export default connect(mapStateToProps, null)(PhoneDetail);
