import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SettingsState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const useSettingsStore = create(
  persist<SettingsState>(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    { name: 'settings-store' } // 存储 key
  )
);

export default useSettingsStore;