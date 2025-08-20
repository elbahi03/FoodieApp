import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenu = createAsyncThunk(
  "menu/fetchMenu",
  async (restaurantId) => {
    const response = await fetch("https://68a308dcc5a31eb7bb1eb406.mockapi.io/menu");
    if (!response.ok) {
      throw new Error("Erreur lors du chargement du menu");
    }
    const data = await response.json();
    return data.filter(item => item.restaurantId === restaurantId);
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearMenu: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearMenu } = menuSlice.actions;
export default menuSlice.reducer;
