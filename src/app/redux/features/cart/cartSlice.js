import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartsSlices = createSlice({
  name: "carts",
  initialState,
  reducers: {},
});

export const {} = cartsSlices.actions;
export default cartsSlices.reducer;
