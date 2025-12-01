import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      {/* Todo Items */}
      <div className="space-y-3 mb-6">
        {[1, 2, 3, 4].map((todo, index) => (
          <TodoItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
