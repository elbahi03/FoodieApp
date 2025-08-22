import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Liste des articles dans le panier
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); // Ajouter l'article au panier
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;