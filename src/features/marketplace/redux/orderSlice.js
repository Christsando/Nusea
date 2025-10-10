import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        list: [],
    },
    reducers: {
        addOrder: (state, action) => {
            state.list.push(action.payload);
        },
        clearOrders: (state) => {
            state.list = [];
        },
    },
});

export const { addOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
