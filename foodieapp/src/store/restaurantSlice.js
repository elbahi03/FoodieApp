import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 👉 action async pour récupérer les restaurants depuis ton API
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const response = await fetch("https://68a308dcc5a31eb7bb1eb406.mockapi.io/restaurant/restaurants");
    if (!response.ok) {
      throw new Error("Erreur lors du chargement des restaurants");
    }
    return await response.json();
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    list: [],      // liste des restaurants
    loading: false, // état de chargement
    error: null,    // message d'erreur
  },
  reducers: {}, // ici on mettra plus tard les reducers synchrones si besoin
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload; // on stocke les données
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // on garde le message d’erreur
      });
  },
});

export default restaurantSlice.reducer;
