
import FilterBar from '@/app/components/FilterBar';
import SearchBar from "@/app/components/SearchBar";
import TodoList from '@/app/components/TodoList';

export default function Home() {
  return (
   <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Next.js Todo App
      </h1>
       <div className="flex gap-4 mb-8">
            <SearchBar />
           <FilterBar />
       </div>
     <TodoList />
   </main>
  );
}
