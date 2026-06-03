"use client";
import { useState } from "react";
import { deleteTodo } from "@/lib/api";
import { Todo } from "@/types/todo";

interface TodoCardProps {
  todo: Todo;
}

const TodoCard = ({ todo }: TodoCardProps) => {
  const { title } = todo;
  const [completed, setCompleted] = useState(todo.completed);

  const handleToggle = async () => {
    setCompleted(!completed);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  return (
    <div className="border rounded-lg p-5 shadow-sm bg-white">
      <div className="flex items-center justify-between">
        <h2
          className={`text-lg font-semibold ${completed ? "line-through text-black" : ""}`}
        >
          {title}
        </h2>

        <div className="flex gap-3">
          <button onClick={handleToggle} className="border px-4 py-2 rounded">
            {completed ? "Undo" : "Complete"}
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
