import React from "react";
import { TodoList } from "./components/todo-list";
import { TodoForm } from "./components/todo-form";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-24">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10rem] left-1/4 w-24 h-23 bg-yellow-200 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-[20rem]  w-24 h-23 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute top-[30rem] left-1/3  w-24 h-23 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3  w-24 h-23 bg-purple-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
              ✨ Todo Master ✨
            </h1>
            <p className="text-gray-300 text-lg">Organize your life, one task at a time</p>
          </div>
          
          {/* Main container */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
            <TodoForm />
            <TodoList />
          </div>
          
          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">Made with ❤️ using React & Redux Toolkit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
