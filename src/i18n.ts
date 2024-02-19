import useUserPreferencesStore from '@stores/userPreferencesStore';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@assets/localizations/en.json';
import mm from '@assets/localizations/mm.json';

// * Getting user preferences from local storage using zustand
const UserPreferences = useUserPreferencesStore.getState();

const resources = {
  en: {
    translation: en,
  },
  mm: {
    translation: mm,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: UserPreferences.lang,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
