import React, { Fragment } from "react";
import PhoneDetailsHook from "./PhoneDetailsHook";
import PhoneItemHook from "./PhoneItemHook";
import PhoneShoppingCardHook from "./PhoneShoppingCardHook";

const PhoneList = () => {
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
};

export default PhoneList;
