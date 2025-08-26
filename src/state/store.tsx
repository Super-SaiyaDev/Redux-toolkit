import { configureStore } from "@reduxjs/toolkit";
import TodoListReducer from "./slice/todoList";
import favoriteReducer from "./slice/favoriteSlice";

export const store = configureStore({
  reducer: {
    todolist: TodoListReducer,
    favorite: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
