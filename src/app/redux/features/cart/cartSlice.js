import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartProducts.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cartProducts.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },
    removeCartItem(state, action) {
      const cartId = action.payload;
      const existingItem = state.cartProducts.find(
        (item) => item.id === cartId
      );

      if (existingItem) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== cartId
        );
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
      }
    },
    incrementQuantity(state, action) {
      const cartId = action.payload;
      const existingItem = state.cartProducts.find((item) => {
        return item.id === cartId;
      });
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
        state.totalPrice = state.cartProducts.reduce(
          (total, item) => total + item.totalPrice,
          0
        );
        state.totalQuantity++;
      }
    },

    decrementQuantity(state, action) {
      const cartId = action.payload;
      const existingItem = state.cartProducts.find((item) => {
        return item.id === cartId;
      });
      if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
        state.totalPrice = state.cartProducts.reduce(
          (total, item) => total - item.totalPrice,
          0
        );
        state.totalQuantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  incrementQuantity,
  decrementQuantity,
} = cartsSlice.actions;
export default cartsSlice.reducer;
