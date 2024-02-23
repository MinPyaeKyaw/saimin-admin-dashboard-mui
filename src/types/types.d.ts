export {};

declare global {
  export type ModeType = 'dark' | 'light';

  export type LangType = 'en' | 'mm';

  interface UserPreferences {
    mode: ModeType;
    lang: LangType;
    sidebarOpen: boolean;
    toggleSidebar: (value: boolean) => void;
    changeMode: (mode: ModeType) => void;
    changeLang: (lang: LangType) => void;
  }
}
