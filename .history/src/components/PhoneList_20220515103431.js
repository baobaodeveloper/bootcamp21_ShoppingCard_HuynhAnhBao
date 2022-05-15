import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PhoneDetail from "./PhoneDetail";
import PhoneItem from "./PhoneItem";
import PhoneShoppingCard from "./PhoneShoppingCard";

export default class PhoneList extends Component {
  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          <PhoneShoppingCard></PhoneShoppingCard>

          <div className="row flex-nowrap">
            <PhoneItem></PhoneItem>
          </div>
        </div>
        <PhoneDetail></PhoneDetail>
      </Fragment>
    );
  }
}
