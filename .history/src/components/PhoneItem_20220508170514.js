import React, { Component } from "react";

class PhoneItem extends Component {
  render() {
    const { hinhAnh } = this.props.item;
    console.log(this.props.item);
    return (
      <div>
        <div className="w-full">
          <img src={hinhAnh} alt="" />
        </div>
      </div>
    );
  }
}

export default PhoneItem;
