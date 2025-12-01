import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Plus, ListTodo } from "lucide-react";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="mx-auto px-14 w-full px-4 pt-12 pb-2 max-w-5xl">
        {/* Header */}
        <div className="mb-10 pl-1 pr-2">
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
              <button
                className="flex btn btn-neutral rounded-md font-semibold w-30 justify-between px-3 text-white"
                onClick={() => setIsOpen(true)}
              >
                <Plus />
                Add Todo
              </button>
            </div>
          </div>
        </div>
        {/* Todo List  */}
        <TodoList />
        {/* Modal  */}
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </main>
  );
}

export default App;
