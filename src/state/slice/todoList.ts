import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  description: string;
  completed: boolean;
}


interface TodoState {
  todoList: Todo[];
  removedTodos: Todo[];
}

const initialState: TodoState = {
  todoList: [
    {
      id: 1,
      text: "Learn Redux Toolkit",
      description: "Understand the core concepts of Redux Toolkit",
      completed: false,
    },
    {
      id: 2,
      text: "Learn Redux Toolkit",
      description: "Understand the core concepts of Redux Toolkit",
      completed: false,
    },
  ],
  removedTodos: [],
};


const todoListSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Pick<Todo, "text" | "description">>) => {
      state.todoList.push({
        id: state.todoList.length + 1,
        text: action.payload.text,
        description: action.payload.description,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const idx = state.todoList.findIndex((t) => t.id === action.payload);
      if (idx !== -1) {
        const [removed] = state.todoList.splice(idx, 1);
        state.removedTodos.push(removed);
      }
    },
    activeTodo: (state, action: PayloadAction<number>) => {
      const idx = state.removedTodos.findIndex((t) => t.id === action.payload);
      if (idx !== -1) {
        const [todo] = state.removedTodos.splice(idx, 1);
        state.todoList.push(todo);
      }
    }
  },
});

export const { addTodo, toggleTodo, removeTodo, activeTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
