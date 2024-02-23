import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useUserPreferencesStore = create<
  UserPreferences,
  [['zustand/persist', unknown]]
>(
  persist(
    (set) => ({
      mode: 'light',
      lang: 'en',
      sidebarOpen: true,
      toggleSidebar: (value) =>
        set((state) => ({ ...state, sidebarOpen: value })),
      changeLang: (lang) => set((state) => ({ ...state, lang })),
      changeMode: (mode) => set((state) => ({ ...state, mode })),
    }),
    {
      name: 'user-preference',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserPreferencesStore;
