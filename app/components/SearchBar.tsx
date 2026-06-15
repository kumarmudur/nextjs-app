'use client';

import { useTodoStore } from '@/store/todoStore';

const SearchBar = () => {
    const { search, setSearch } = useTodoStore();

    return (
        <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search todos"
            className="border p-3 rounded w-full"
        />
    )
};

export default SearchBar;