import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/marketplace/redux/cartSlice";
import reviewReducer from "../features/marketplace/redux/reviewSlice";
import orderReducer from "../features/marketplace/redux/orderSlice";
import { saveState, loadState } from "./persist";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    reviews: reviewReducer,
    orders: orderReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
