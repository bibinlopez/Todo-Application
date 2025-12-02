import axios from "axios";
import {
  Delete,
  DeleteIcon,
  Edit,
  Edit2,
  Edit2Icon,
  Edit3,
  Edit3Icon,
  EditIcon,
  Trash,
  Trash2,
  Trash2Icon,
  TrashIcon,
} from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const TodoItem = ({ todo, setRefreshPage, setEditTodoData, setIsOpen }) => {
  const handleDelete = async (id) => {
    const deleteUrl = `${import.meta.env.VITE_BASE_API_URL}/todo/${id}`;
    try {
      await axios.delete(deleteUrl);

      setRefreshPage((preState) => !preState);

      toast.success("Todo Removed");
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-slate-200  px-4 py-3 hover:shadow-md transition-shadow ">
      <div className="flex items-start justify-between gap-5 md:gap-10">
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h1 className="font-medium text-md pb-1">{todo.title}</h1>
              <h1 className="text-xs">{todo.description}</h1>
            </div>

            {todo.status === "pending" ? (
              <div className="badge badge-soft badge-primary badge-sm">
                Pending
              </div>
            ) : todo.status === "completed" ? (
              <div className="badge badge-soft badge-success badge-sm">
                Completed
              </div>
            ) : (
              <div className="badge badge-soft badge-warning badge-sm">
                Progress
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-around w-20 md:w-30 pt-2">
          <div
            className="w-6 h-6 pt-[1px] curson-pointer"
            onClick={() => {
              setEditTodoData({
                title: todo.title,
                description: todo.description,
                status: todo.status,
                id: todo.id,
              });
              setIsOpen((preState) => !preState);
            }}
          >
            <EditIcon className="text-blue-500" />
          </div>
          <div onClick={() => handleDelete(todo.id)}>
            <Trash2Icon className="text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
