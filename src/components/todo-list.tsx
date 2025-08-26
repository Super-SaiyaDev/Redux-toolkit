import React, { useState } from "react";

import type { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../state/store";
import { removeTodo, toggleTodo } from "../state/slice/todoList";

import { RemovedTodos } from "./removedTodo";
import { toggleFavorite } from "../state/slice/favoriteSlice";
import { FavoritesList } from "./favoriteTodo";

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todolist);
  const favoritesList = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState<boolean>(false);
  const [openFavorites, setOpenFavorites] = useState<boolean>(false);

  return (
    <>
      <div className="space-y-6">
        <div className="flex justif-center items-center flex-col gap-4">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            🎯 My Todo List
          </h1>
          <div className="flex items-center justify-center gap-4">
            <button
              className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl border-2 border-red-300/50"
              onClick={() => setOpen(true)}
            >
              {todos.removedTodos.length} Removed Tasks
            </button>
            <button
              className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl border-2 border-red-300/50"
              onClick={() =>  setOpenFavorites(true)}
            >
              {favoritesList.favorites.length} Favorite Tasks
            </button>
          </div>
        </div>
        {todos.todoList.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-gray-400 text-lg">
              No todos yet! Add your first task above.
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {todos.todoList.map((todo, index) => (
              <li
                key={todo.id}
                className="bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-200 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 hover:from-blue-100 hover:to-purple-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 ">
                    <div className="flex justify-start items-center gap-2 ">
                      <div className="flex gap-2">
                        <button
                          className={`z-50 mb-2 cursor-pointer hover:text-green-600 transition-colors duration-300 text-2xl`}
                          onClick={() => dispatch(toggleTodo(todo.id))}
                        >
                          {todo.completed ? "⭕" : "✅"}
                        </button>
                        <button
                          className={`z-50 mb-2 cursor-pointer hover:text-red-600 transition-colors duration-300 text-md`}
                          onClick={() => dispatch(removeTodo(todo.id))}
                        >
                          eliminar
                        </button>
                        <button
                          className={`z-50 mb-2 cursor-pointer hover:text-red-600 transition-colors duration-300 text-md`}
                          onClick={() => dispatch(toggleFavorite(todo))}
                        >
                          agregar a favoritos
                        </button>
                      </div>
                      <h2
                        className={`text-xl font-bold ${
                          todo.completed
                            ? "text-green-500 line-through"
                            : "text-gray-800"
                        } mb-2`}
                      >
                        {todo.text}
                      </h2>
                    </div>
                    {todo.description && (
                      <p
                        className={` ${
                          todo.completed
                            ? "text-green-500 line-through"
                            : "text-gray-800  border-purple-400"
                        } text-sm leading-relaxed bg-white/60 p-3 rounded-lg border-l-4 w-[45rem] break-words overflow-x-auto`}
                      >
                        {todo.description}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <RemovedTodos open={open} setOpen={setOpen} />
      <FavoritesList open={openFavorites} setOpen={setOpenFavorites} />
    </>
  );
};
