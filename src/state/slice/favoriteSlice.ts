import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "./todoList";

interface Favorite extends Todo {
  isFavorite: boolean;
}

interface favoritosState {
  favorites: Favorite[];
}

const initialState: favoritosState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Todo>) => {
      const fav = state.favorites.findIndex((f) => f.id === action.payload.id);
      if (fav === -1) {
        state.favorites.push({ ...action.payload, isFavorite: true });
      } else {
        state.favorites.splice(fav, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
