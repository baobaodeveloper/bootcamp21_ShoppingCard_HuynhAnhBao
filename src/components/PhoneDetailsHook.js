import React from "react";
import { useSelector } from "react-redux";

const PhoneDetailsHook = () => {
  const {
    hinhAnh,
    tenSP,
    heDieuHanh,
    manHinh,
    cameraTruoc,
    cameraSau,
    ram,
    rom,
  } = useSelector((state) => state.phoneReducer.detail);
  return (
    <div className="m-5 d-flex">
      <div className="w-50">
        <img
          className="w-full h-full"
          style={{ width: "500px" }}
          src={hinhAnh}
          alt=""
        />
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
};

export default PhoneDetailsHook;
