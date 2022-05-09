const initialState = {
  product: [
    [
      {
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
      {
        maSP: 2,
        tenSP: "Meizu 16Xs",
        manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
        heDieuHanh: "Android 9.0 (Pie); Flyme",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 7600000,
        hinhAnh: "./img/sp_note7.png",
      },
      {
        maSP: 3,
        tenSP: "Iphone XS Max",
        manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
        heDieuHanh: "iOS 12",
        cameraSau: "Chính 12 MP & Phụ 12 MP",
        cameraTruoc: "7 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 27000000,
        hinhAnh: "./img/sp_iphoneX.png",
      },
    ],
  ],
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
  shopCardItem: [],
};

const phoneReducer = (state = initialState, action) => {
  let quality = 1;
  switch (action.type) {
    case "QUALITY_PHONE_ITEM_INCREA":
      const newShopCardInCreaQty = [...state.shopCardItem];
      const indexIncrea = newShopCardInCreaQty.findIndex(
        (item) => item.maSP === action.item.maSP
      );
      newShopCardInCreaQty[indexIncrea].qty += 1;
      state.shopCardItem = newShopCardInCreaQty;

      return { ...state };

    case "QUALITY_PHONE_ITEM_DECREA":
      const newShopCardDeCreaQty = [...state.shopCardItem];
      const indexDecrea = newShopCardDeCreaQty.findIndex(
        (item) => item.maSP === action.item.maSP
      );
      newShopCardDeCreaQty[indexDecrea].qty > 0
        ? newShopCardDeCreaQty[indexDecrea].qty--
        : newShopCardDeCreaQty[indexDecrea].qty++;
      state.shopCardItem = newShopCardDeCreaQty;

      return { ...state };
    case "ADD_SHOPPING_CARD":
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
    case "SHOW_DETAIL":
      state.detail = action.item;
      return { ...state };

    default:
      return state;
  }
};

export default phoneReducer;
