import React, { Component } from "react";

class PhoneItem extends Component {
  render() {
    const { hinhAnh, tenSP } = this.props.item;
    console.log(this.props.item);
    return (
      <div className="card m-4" style={{ width: "18rem" }}>
        <img src={hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>

          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    );
  }
}

export default PhoneItem;
