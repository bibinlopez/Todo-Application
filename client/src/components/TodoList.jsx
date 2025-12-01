import React from "react";

const TodoList = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      {/* Todo Items */}
      <div className="space-y-3 mb-6">
        {[1, 2, 3, 4].map((todo, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 rounded-xl border border-slate-200  p-4 hover:shadow-md transition-shadow "
          >
            hello
          </div>
        ))}
      </div>
      TodoList
    </div>
  );
};

export default TodoList;
