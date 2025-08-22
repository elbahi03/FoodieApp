import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";
import menuReducer from "./menuSlice";
import cartReducer from "./cartSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurants: restaurantReducer,
    menu: menuReducer,
  },
});
