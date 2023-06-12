import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const getShipping = JSON.parse(localStorage.getItem('shipping'));
const initialState = {
    shipping: getShipping ? getShipping : {},
    isLoading: false,
    isError: false,
    error: ""
}

export const shippingSlice = createSlice({
    name:"shipping",
    initialState,
    reducers: {
        createShipping: (state, action) => {
            state.shipping = action.payload;
            localStorage.setItem("shipping", JSON.stringify(state.shipping));
        }
    },
});
export const { createShipping } = shippingSlice.actions;
export default shippingSlice.reducer;