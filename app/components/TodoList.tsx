'use client';

import {useEffect, useMemo, useState} from "react";

import { getTodos } from '@/lib/api';
import { useTodoStore } from "@/store/todoStore";
import { Todo } from "@/types/todo";
import { filterTodos } from '@/utils/filters';
import TodoCard from './TodoCard';

const TodoList =  () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);

    const { search, filter } = useTodoStore();

    const fetchTodos = async () => {
        setLoading(true);
        const data = await getTodos();
        setTodos(data);
        setLoading(false)
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    const filteredTodos = useMemo(() => {
        return filterTodos(todos, search, filter)
    }, [todos, search, filter]);

    if (loading) {
        return <p>Loading todos...</p>
    }

    if (filteredTodos.length === 0) {
        return (
            <p className="text-gray-500 text-center">
                No todos found.
            </p>
        )
    }

    return (
        <div className="grid gap-4">
            {
                filteredTodos.map(todo => (
                    <TodoCard key={todo.id} todo={todo}/>
                ))
            }
        </div>
    )
}

export default TodoList