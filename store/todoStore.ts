import { create } from 'zustand';

interface TodoStore {
    search: string;
    filter: string;

    setSearch: (value: string) => void;
    setFilter: (value: string) => void;
}

export const useTodoStore = create<TodoStore>(
    (set) => ({
        search: '',
        filter: 'all',

        setSearch: value => set({ search:  value }),

        setFilter: value => set({ filter: value }),
    })
)