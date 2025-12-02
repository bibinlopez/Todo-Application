import axios from "axios";
import { ForkKnife, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Modal = ({ isOpen, setIsOpen, setRefreshPage }) => {
  if (!isOpen) return null;

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addUrl = `http://localhost:4000/todo`;

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(addUrl, todo);

      console.log({ data });
      setRefreshPage((preState) => !preState);
      setIsOpen(false);
      toast.success("Todo Added");
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="font-bold text-lg">Create New Todo</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            {" "}
            <X className="w-5 h-5" />
          </button>
        </div>

        <form className="px-6 pb-5 space-y-4">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-semibold">
              Title<span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              value={todo.title}
              onChange={(e) => handleChange(e)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter Todo title"
              required
              autoFocus
              name="title"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              type="text"
              value={todo.description}
              onChange={(e) => handleChange(e)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter Todo description (optional)"
              autoFocus
              name="description"
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-semibold"
            >
              Status
            </label>
            <select
              className="select w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="status"
              value={todo.status}
              onChange={(e) => handleChange(e)}
            >
              <option value="pending">Pending</option>
              <option value="progress">Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-end pt-2 gap-2">
            <button
              className="flex btn rounded-md font-semibold w-30 justify-center"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex btn btn-neutral rounded-md font-semibold w-30 justify-center text-white"
              onClick={() => {
                console.log("form submitting");
                handleSubmit();
              }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
