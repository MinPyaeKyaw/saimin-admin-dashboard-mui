export {};

declare global {
  export type ModeType = 'dark' | 'light';

  export type LangType = 'en' | 'mm';

  interface UserPreferences {
    mode: ModeType;
    lang: LangType;
    changeMode: (mode: ModeType) => void;
    changeLang: (lang: LangType) => void;
  }
}
