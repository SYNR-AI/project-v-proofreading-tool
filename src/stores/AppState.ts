import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type AppState = {
  user: {
    name: string;
    age: number;
  };
  updateUser: (user: Partial<AppState['user']>) => void;
  updateName: (name: string) => void;
};

const useAppState = create(
  persist(
    devtools(
      immer<AppState>((set) => ({
        user: { name: 'John', age: 30 },
        updateUser: (user: Partial<AppState['user']>) => set((state: AppState) => ({ user: { ...state.user, ...user } })),
        updateName: (name: string) => set((state: AppState) => {
          state.user.name = name;
        }),
      }))
    ),
    { name: 'app-state' }
  )
);

export default useAppState;