import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_SHOPPING_CARD, SHOW_DETAIL } from "../utils/constant";

const PhoneItemHook = () => {
  const product = useSelector((state) => state.phoneReducer.product);
  const dispatch = useDispatch();
  return (
    <>
      {product.length > 0 &&
        product.map((item) => {
          const { hinhAnh, tenSP } = item;
          return (
            <div
              key={item.maSP}
              className="m-4 card d-flex flex-column"
              style={{ width: "35rem" }}
            >
              <img src={hinhAnh} className="card-img-top h-75" alt="..." />
              <div className="flex-1 mt-auto text-center card-body">
                <h5 className="text-2xl font-semibold card-title">{tenSP}</h5>

                <button
                  onClick={() =>
                    dispatch({
                      type: SHOW_DETAIL,
                      payload: item,
                    })
                  }
                  className="mr-3 btn btn-primary"
                >
                  Xem chi tiet
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: ADD_SHOPPING_CARD,
                      payload: item,
                    })
                  }
                  className="btn btn-danger"
                >
                  Them vao gio hang
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PhoneItemHook;
