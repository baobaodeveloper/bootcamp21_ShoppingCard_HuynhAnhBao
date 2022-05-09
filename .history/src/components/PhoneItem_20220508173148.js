import React, { Component } from "react";

class PhoneItem extends Component {
  render() {
    const { hinhAnh, tenSP } = this.props.item;
    console.log(this.props.item);
    return (
      <div className="card m-4 d-flex flex-column" style={{ width: "25rem" }}>
        <img src={hinhAnh} className="card-img-top h-75" alt="..." />
        <div className="card-body flex-1 mt-auto">
          <h5 className="card-title">{tenSP}</h5>

          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    );
  }
}

export default PhoneItem;
