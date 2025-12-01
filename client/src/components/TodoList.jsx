import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 py-6 px-12">
      {/* Todo Items */}
      <div className="space-y-3 mb-6">
        {[1, 2, 3, 4, 5, 6].map((todo, index) => (
          <TodoItem key={index} />
        ))}
      </div>
      {/* Pagination  */}
      <div className="flex justify-end pr-1 border-t border-slate-200 pt-3 items-center">
        <div className="flex">
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn cursor-default no-animation">
              Page 22
            </button>
            <button className="join-item btn" disabled>
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
