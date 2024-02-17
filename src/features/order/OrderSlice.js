import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addOrder,
  deleteOrder,
  editOrder,
  getAllOrders,
  getDiffSalesData,
  getOrders,
  getSalesData,
  payOrder,
} from "./orderApi";

const initialState = {
  orders: [],
  salesData: [],
  diffSalesData: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
  error: null,
};

export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (userId) => {
    const orders = await getOrders(userId);
    return orders;
  }
);

export const fetchSalesData = createAsyncThunk(
  "order/fetchSalesData",
  async () => {
    const salesData = await getSalesData();
    return salesData;
  }
);

export const fetchDiffSalesData = createAsyncThunk(
  "order/fetchDiffSalesData",
  async () => {
    const diffsalesData = await getDiffSalesData();
    return diffsalesData;
  }
);

export const fetchAllOrders = createAsyncThunk(
  "order/fetchAllOrders",
  async () => {
    const orders = await getAllOrders();
    return orders;
  }
);

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (data) => {
    const order = await addOrder(data);
    return order;
  }
);

export const createPayment = createAsyncThunk(
  "order/createPayment",
  async (data) => {
    const order = await payOrder(data);
    return order;
  }
);

export const removeOrder = createAsyncThunk(
  "order/removeOrder",
  async (data) => {
    const order = await deleteOrder(data);
    return order;
  }
);

export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async ({ id, data }) => {
    const order = await editOrder({ id, data });
    return order;
  }
);

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    restOrderMessage(state) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
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
      });

    builder
      .addCase(createPayment.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.orders.push(action.payload);
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.orders = [];
        state.isSuccess = false;
        state.error = action.error?.message;
      });

    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
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
      .addCase(fetchSalesData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(fetchSalesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.salesData = action.payload;
      })
      .addCase(fetchSalesData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.salesData = [];
        state.isSuccess = false;
        state.error = action.error?.message;
      })
      .addCase(fetchDiffSalesData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(fetchDiffSalesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.diffSalesData = action.payload;
      })
      .addCase(fetchDiffSalesData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.diffSalesData = {};
        state.isSuccess = false;
        state.error = action.error?.message;
      });

    builder
      .addCase(fetchAllOrders.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.orders = action.payload;
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.orders = [];
        state.isSuccess = false;
        state.error = action.error?.message;
      })
      .addCase(removeOrder.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(removeOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Order Deleted SuccessFully!";
        state.orders = state.orders.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(removeOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.orders = [];
        state.error = action.error?.message;
      })
      .addCase(updateOrder.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = null;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.error = null;
        state.message = "Order Updated Successfully!";
        // Update the specific publishers in the state
        state.orders = state.orders.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = null;
        state.isError = true;
        state.orders = [];
        state.error = action.error?.message;
      });
  },
});
export const { restOrderMessage } = orderSlice.actions;

export default orderSlice.reducer;
