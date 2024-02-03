import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.favorite.push(payload);
    },
    removeFavorite(state, { payload }) {
      state.favorite = state.favorite.filter((el) => el !== payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
