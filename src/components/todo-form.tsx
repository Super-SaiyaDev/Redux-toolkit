import React, { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../state/store";
import { addTodo } from "../state/slice/todoList";

interface Todo {
  text: string;
  description: string;
}

export const TodoForm: React.FC = () => {
  const [input, setInput] = useState<Todo>({
    text: "",
    description: "",
  });
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo({ text: input.text, description: input.description }));
    setInput({
      text: "",
      description: "",
    });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6 drop-shadow-lg">
          ✨ Create New Todo ✨
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                className="w-full border-2 border-white/20 p-4 rounded-xl text-gray-800 bg-white/90 backdrop-blur-sm h-14 placeholder-gray-500 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/30 transition-all duration-300 shadow-lg"
                type="text"
                placeholder="📝 What needs to be done?"
                name="text"
                value={input.text}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <textarea
                className="w-full border-2 border-white/20 p-4 rounded-xl text-gray-800 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/30 transition-all duration-300 shadow-lg resize-none h-14"
                name="description"
                placeholder="📋 Add details..."
                value={input.description}
                onChange={handleChange}
                rows={1}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button 
              type="submit" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-orange-600 hover:scale-105 transform transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl border-2 border-yellow-300/50"
            >
              🚀 Add Todo
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
