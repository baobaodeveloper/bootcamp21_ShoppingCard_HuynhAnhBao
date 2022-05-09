import React, { Component } from "react";

class PhoneDetail extends Component {
  render() {
    console.log(this.props.detail);
    const { hinhAnh } = this.props.detail;
    return (
      <div className="d-flex">
        <div>
          <img src={hinhAnh} alt="" />
        </div>
        <table className="table">
          <thead>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default PhoneDetail;
