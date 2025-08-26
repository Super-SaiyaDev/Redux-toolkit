import React from "react";
import type { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../state/store";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { toggleFavorite } from "../state/slice/favoriteSlice";

export const FavoritesList: React.FC<{
  open: boolean;
  setOpen: (data: boolean) => void;
}> = ({ open, setOpen }) => {
  const todos = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          🎯 My favorite tasks
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {todos.favorites.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📋</div>
              <p className="text-gray-400 text-lg">
                No todos removed yet! Add your first task above.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {todos.favorites.map((todo, index) => (
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
                            className={`z-50 mb-2 cursor-pointer hover:text-red-600 transition-colors duration-300 text-md`}
                            onClick={() => {
                              dispatch(toggleFavorite(todo));
                              handleClose();
                            }}
                          >
                            eliminar de favoritos{" "}
                          </button>
                        </div>
                        <h2
                          className={`text-xl font-bold text-gray-800 mb-2`}
                        >
                          {todo.text}
                        </h2>
                      </div>
                      {todo.description && (
                        <p
                          className={`text-purple-500 text-md leading-relaxed bg-white/60 p-3 rounded-lg border-l-4 w-[45rem] break-words overflow-x-auto`}
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
        </DialogContent>
      </Dialog>
    </>
  );
};
