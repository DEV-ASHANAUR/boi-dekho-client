import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const getCart = JSON.parse(localStorage.getItem('cartItems'));

const initialState = {
  cartItems: getCart ? getCart : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  shippingFee: 50,
  grandTotal: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id == action.payload._id
      );
      //     console.log("id",action.payload._id);
      //   console.log("existing",existingIndex);

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        // console.log("update",state.cartItems[existingIndex]);
        // console.log("update quantity");
        toast.success('update quantity!')
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success('Added to cart!')
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    addToCartView(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id == action.payload._id
      );
      //     console.log("id",action.payload._id);
      //   console.log("existing",existingIndex);

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: action.payload.cartQuantity,
        };
        // console.log("update",state.cartItems[existingIndex]);
        // console.log("update quantity");
        toast.success('update quantity!')
      } else {
        let tempProductItem = action.payload;
        state.cartItems.push(tempProductItem);
        toast.success('Added to cart!')
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    dereaseCart(state, action) {
      let itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success('quantity decress!')
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const restCartItem = state.cartItems.filter((item) => item._id !== action.payload._id);
        state.cartItems = restCartItem;
        toast.error('removed item!')
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeCartItem(state, action) {
      const restCartItem = state.cartItems.filter((cartItems) => cartItems._id !== action.payload._id);
      state.cartItems = restCartItem;
      toast.error('removed item!')
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem;
        // console.log("price", price);
        // console.log("cartQuantity", cartQuantity);
        const itemTotal = price * cartQuantity;
        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;
        return cartTotal;
      }, { total: 0, quantity: 0 });
      total = parseFloat(total.toFixed(2));
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
      state.grandTotal = state.cartTotalAmount + state.shippingFee;
    },
    clearCart(state, action) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      state.grandTotal = 0;
      //   toast.info("All Item removed!");
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, addToCartView, removeCartItem, getTotals, clearCart, dereaseCart } = cartSlice.actions

export default cartSlice.reducer