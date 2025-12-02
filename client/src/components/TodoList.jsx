import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, page, setPage, limit }) => {
  const prevBtnDisable = page === 1 ? true : false;
  const nextBtnDisable = todos.length < limit ? true : false;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 py-6 px-12">
      {/* Todo Items */}
      <div className="space-y-3 mb-6">
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} />
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
