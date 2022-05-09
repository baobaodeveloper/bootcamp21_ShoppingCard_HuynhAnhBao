import React, { Component } from "react";

class PhoneItem extends Component {
  render() {
    const { hinhAnh } = this.props.item;
    console.log(this.props.item);
    return (
      <div className="w-full p-4">
        <img className="w-[300px] object-cover" src={hinhAnh} alt="" />
      </div>
    );
  }
}

export default PhoneItem;
