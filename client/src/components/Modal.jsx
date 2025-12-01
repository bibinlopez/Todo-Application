import { ForkKnife, X } from "lucide-react";
import React from "react";

const Modal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

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
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter Todo title"
              required
              autoFocus
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
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter Todo description (optional)"
              autoFocus
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-semibold"
            >
              Status
            </label>
            <select className="select w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
          <div className="flex justify-end pt-2 gap-2">
            <button
              className="flex btn rounded-md font-semibold w-30 justify-center"
              type="reset"
            >
              Cancel
            </button>
            <button
              type="submit  "
              className="flex btn btn-neutral rounded-md font-semibold w-30 justify-center text-white"
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
