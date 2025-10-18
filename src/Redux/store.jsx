import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu/menuSlice";
import heroReducer from "./hero/heroSlice";
import promoReducer from "./promo/promoSlice";
import footerInfoReducer from "./footerInfo/footerInfoSlice";
import footerNavReducer from "./footerNav/footerNavSlice";
import footerbreadcrumbReducer from "./footerbreadcrumb/footerbreadcrumbSlice";
import sliderReduccer from "./slider/sliderSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    hero: heroReducer,
    promo: promoReducer,
    slider: sliderReduccer,
    footerInfo: footerInfoReducer,
    footerNav: footerNavReducer,
    footerbreadcrumb: footerbreadcrumbReducer,
  },
});
