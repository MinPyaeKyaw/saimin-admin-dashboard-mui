import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useUserStore = create<User, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      info: {
        username: '',
        email: '',
        token: '',
      },
      mode: 'light',
      lang: 'en',
      sidebarOpen: true,
      updateUserInfo: (value) =>
        set((state) => ({
          ...state,
          info: {
            ...state.info,
            ...value,
          },
        })),
      toggleSidebar: (value) =>
        set((state) => ({ ...state, sidebarOpen: value })),
      changeLang: (lang) => set((state) => ({ ...state, lang })),
      changeMode: (mode) => set((state) => ({ ...state, mode })),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
