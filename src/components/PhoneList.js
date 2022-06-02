import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PhoneDetail from "./PhoneDetail";
import PhoneDetailsHook from "./PhoneDetailsHook";
import PhoneItem from "./PhoneItem";
import PhoneItemHook from "./PhoneItemHook";
import PhoneShoppingCard from "./PhoneShoppingCard";
import PhoneShoppingCardHook from "./PhoneShoppingCardHook";

export default class PhoneList extends Component {
  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          <PhoneShoppingCardHook></PhoneShoppingCardHook>

          <div className="row flex-nowrap">
            <PhoneItemHook></PhoneItemHook>
          </div>
        </div>
        <PhoneDetailsHook></PhoneDetailsHook>
      </Fragment>
    );
  }
}
