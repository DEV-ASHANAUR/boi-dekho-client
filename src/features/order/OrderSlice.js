import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addOrder, getOrders } from "./orderApi";

const initialState = {
    orders: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: ""
}

export const fetchOrders = createAsyncThunk("order/fetchOrders", async (userId) => {
    const orders = await getOrders(userId);
    return orders;
})

export const createOrder = createAsyncThunk("order/createOrder", async (data) => {
    const order = await addOrder(data);
    return order;
})

export const orderSlice = createSlice({
    name: "orderSlice",
    initialState,
    reducers: {
        restOrderMessage(state) {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.error = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createOrder.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(createOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            // state.orders.push(action.payload);
        })
        .addCase(createOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.orders = [];
            state.isSuccess = false;
            state.error = action.error?.message;
        })

        builder.addCase(fetchOrders.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(fetchOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.orders = action.payload;
        })
        .addCase(fetchOrders.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.orders = [];
            state.isSuccess = false;
            state.error = action.error?.message;
        })
    }
});
export const { restOrderMessage } = orderSlice.actions

export default orderSlice.reducer;