import React, { Component } from "react";

class PhoneDetail extends Component {
  render() {
    console.log(this.props.detail);
    const { hinhAnh, tenSP } = this.props.detail;
    return (
      <div className="d-flex">
        <div>
          <img src={hinhAnh} alt="" />
        </div>
        <table className="table">
          <thead>
            <tr>
              <td>Ten San Pham</td>
              <td>{tenSP}</td>
            </tr>
            <tr>
              <td>He Dieu Hanh</td>
              <td></td>
            </tr>
            <tr>
              <td>Camera truoc</td>
              <td></td>
            </tr>
            <tr>
              <td>Camera sau</td>
              <td></td>
            </tr>
            <tr>
              <td>RAM</td>
              <td></td>
            </tr>
            <tr>
              <td>ROM</td>
              <td></td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default PhoneDetail;
