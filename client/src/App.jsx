import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Plus, ListTodo } from "lucide-react";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 6;

  const [refreshPage, setRefreshPage] = useState(false);

  const fetchUrl = `http://localhost:4000/todo?page=${page}&limit=${limit}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(fetchUrl);
        const todos = data?.data;
        setTodos(todos);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [page, refreshPage]);

  return (
    <>
      <Toaster />
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
          <TodoList
            todos={todos}
            page={page}
            setPage={setPage}
            limit={limit}
            setRefreshPage={setRefreshPage}
          />
          {/* Modal  */}
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setRefreshPage={setRefreshPage}
          />
        </div>
      </main>
    </>
  );
}

export default App;
