import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Plus, ListTodo } from "lucide-react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="mx-auto w-full px-4 py-20 max-w-5xl">
        {/* Header */}
        <div className="mb-12 pl-1 pr-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600 rounded-xl  ">
                <ListTodo className="size-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-medium text-slate-900">
                  Todo Application
                </h1>
              </div>
            </div>
            <div>
              <button className="flex btn btn-neutral rounded-md font-semibold w-30 justify-between px-3 text-white">
                <Plus />
                Add Todo
              </button>
            </div>
          </div>
        </div>
        {/* Todo List  */}
        <TodoList />
      </div>
    </main>
  );
}

export default App;
