import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";
import menuReducer from "./menuSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    menu: menuReducer,
  },
});
