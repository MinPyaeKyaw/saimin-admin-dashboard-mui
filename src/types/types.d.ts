export {};

declare global {
  export interface MenuType {
    name: string;
    route: string;
    icon: JSX.Element;
    children?: MenuType[];
  }

  export interface PaginationParams {
    pageSize: 5;
    page: 0;
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
