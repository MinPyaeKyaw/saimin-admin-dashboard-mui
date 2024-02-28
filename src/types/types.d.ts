export {};

declare global {
  export interface MenuType {
    name: string;
    icon: ReactNode;
    route: string;
    children?: MenuType[];
  }
  export interface DataType {
    value: string;
    label: string;
  }

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
