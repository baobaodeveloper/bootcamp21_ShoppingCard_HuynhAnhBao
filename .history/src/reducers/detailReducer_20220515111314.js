import { ADD_SHOPPING_CARD, SHOW_DETAIL } from "../utils/constant";

const initialState = {
  detail: {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/sp_vivo850.png",
  },
};
const detailReducer = (state = initialState, action) => {
  let quality = 1;
  switch (action.type) {
    case ADD_SHOPPING_CARD:
      let newShopCard = [...state.shopCardItem];
      const indexItem = newShopCard.findIndex(
        (item) => item.maSP === action.item.maSP
      );
      action.item.qty = quality;
      if (indexItem === -1) {
        newShopCard.push(action.item);
      } else {
        newShopCard[indexItem].qty += 1;
      }
      state.shopCardItem = newShopCard;
      return { ...state };
    case SHOW_DETAIL:
      state.detail = action.item;

      return { ...state };

    default:
      return state;
  }
};
