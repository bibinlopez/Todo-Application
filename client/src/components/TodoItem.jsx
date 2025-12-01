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

const TodoItem = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-slate-200  px-4 py-3 hover:shadow-md transition-shadow ">
      <div className="flex items-start justify-between gap-5 md:gap-10">
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h1 className="font-medium">hi</h1>
              <h1>descriptin</h1>
            </div>
            {/* <span>inprogress</span> */}
            <div className="badge badge-soft badge-primary badge-sm">
              Primary
            </div>
            {/* <div class="badge badge-soft badge-success">Success</div>
<div class="badge badge-soft badge-warning">Warning</div> */}
          </div>
          {/* <div className="flex items-center gap-1">date</div> */}
        </div>
        <div className="flex justify-around w-20 md:w-30 pt-2">
          {/* <Trash className="text-red-600" />
          <Trash2 /> */}
          {/* <TrashIcon /> */}

          <div className="w-6 h-6 pt-[1px]">
            <EditIcon className="text-blue-500" />
          </div>
          <div>
            <Trash2Icon className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
