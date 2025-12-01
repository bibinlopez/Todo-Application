import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Plus, ListTodo } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full px-4 py-8 max-w-5xl">
        <div className="mb-8">
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
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
