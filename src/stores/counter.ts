import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useCounterStore = create(
  devtools<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }))
);

export default useCounterStore;