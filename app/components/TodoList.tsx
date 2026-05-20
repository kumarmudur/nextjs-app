import { getTodos } from '@/lib/api';
import TodoCard from './TodoCard';

const TodoList = async () => {
    const todos = await getTodos();
    return (
        <div className="grid gap-4">
            {
                todos.map(todo => (
                    <TodoCard key={todo.id} todo={todo}/>
                ))
            }
        </div>
    )
}

export default TodoList