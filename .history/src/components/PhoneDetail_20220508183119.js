import React, { Component } from "react";

class PhoneDetail extends Component {
  render() {
    console.log(this.props.detail);
    const {
      hinhAnh,
      tenSP,
      heDieuHanh,
      manHinh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
    } = this.props.detail;
    return (
      <div className="d-flex m-10">
        <div className="w-50">
          <img className="w-full h-full" style={{width: 500px}} src={hinhAnh} alt="" />
        </div>
        <table className="table">
          <thead>
            <tr>
              <td>
                <h1>Thong Tin San Pham</h1>
              </td>
            </tr>
            <tr>
              <td>Ten San Pham</td>
              <td>{tenSP}</td>
            </tr>
            <tr>
              <td>He Dieu Hanh</td>
              <td>{heDieuHanh}</td>
            </tr>
            <tr>
              <td>Camera truoc</td>
              <td>{cameraTruoc}</td>
            </tr>
            <tr>
              <td>Man hinh</td>
              <td>{manHinh}</td>
            </tr>
            <tr>
              <td>Camera sau</td>
              <td>{cameraSau}</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>{ram}</td>
            </tr>
            <tr>
              <td>ROM</td>
              <td>{rom}</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default PhoneDetail;
