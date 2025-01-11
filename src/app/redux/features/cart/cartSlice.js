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
  },
});

export const { addToCart } = cartsSlice.actions;
export default cartsSlice.reducer;
