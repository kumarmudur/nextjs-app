'use client';
import { useState } from "react";
import { Todo } from "@/types/todo";

interface TodoCardProps {
    todo: Todo
}

const TodoCard = ({ todo }: TodoCardProps) => {
    const { title } = todo;
    const [completed, setCompleted] = useState(
        todo.completed
    );

    return (
        <div className="border rounded-lg p-5 shadow-sm bg-white">
            <div className="flex items-center justify-between">
                <h2 className={`text-lg font-semibold ${completed ? 'line-through text-black' : ""}`}>
                    { title }
                </h2>
            </div>
        </div>
    )
}

export default TodoCard;