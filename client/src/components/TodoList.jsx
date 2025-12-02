import React from "react";
import TodoItem from "./TodoItem";
import { ListX } from "lucide-react";

const TodoList = ({
  todos,
  page,
  setPage,
  limit,
  setRefreshPage,
  setEditTodoData,
  setIsOpen,
}) => {
  const prevBtnDisable = page === 1 ? true : false;
  const nextBtnDisable = todos.length < limit ? true : false;

  if (todos.length === 0 && page === 1) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg shadow-sm border border-slate-200">
        <div className="p-4 bg-slate-100 rounded-full mb-4">
          <ListX className="size-10 text-slate-400" />
        </div>
        <h3 className="text-slate-900 mb-2">No todos yet</h3>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 py-6 px-12">
      {/* Todo Items */}
      <div className="space-y-3 mb-6">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setRefreshPage={setRefreshPage}
            setEditTodoData={setEditTodoData}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
      {/* Pagination  */}
      <div className="flex justify-end pr-1 border-t border-slate-200 pt-3 items-center">
        <div className="flex">
          <div className="join">
            <button
              className="join-item btn"
              disabled={prevBtnDisable}
              onClick={() => setPage(page - 1)}
            >
              «
            </button>
            <button className="join-item btn cursor-default no-animation">
              {`Page ${page}`}
            </button>
            <button
              className="join-item btn"
              disabled={nextBtnDisable}
              onClick={() => setPage(page + 1)}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
