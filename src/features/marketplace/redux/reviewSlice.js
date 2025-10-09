import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
        list: [], // daftar semua review
    },
    reducers: {
        addReview: (state, action) => {
            state.list.push(action.payload);
        },
    },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
