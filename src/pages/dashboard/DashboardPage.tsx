import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useUserPreferencesStore from '@stores/userPreferencesStore';

export function DashboardPage() {
  const { t, i18n } = useTranslation();
  const { changeMode, mode, changeLang } = useUserPreferencesStore();

  const handleChangeMode = (): void => {
    if (mode === 'light') {
      changeMode('dark');
    } else {
      changeMode('light');
    }
  };

  const handleChangeLang = (): void => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('mm');
    } else {
      i18n.changeLanguage('en');
    }
    changeLang(i18n.language as LangType);
  };

  return (
    <>
      <Button onClick={handleChangeMode} variant="contained">
        change mode
      </Button>
      <Button onClick={handleChangeLang} variant="contained">
        change language
      </Button>
      <Typography variant="h1" component="h2">
        {i18n.language}
      </Typography>
      <Typography variant="h1" component="h2">
        {t('hello')}
      </Typography>
      <Typography variant="h1" component="h2">
        {t('hello')}
      </Typography>
      <Typography variant="h1" component="h2">
        {t('hello')}
      </Typography>
      <Typography variant="h1" component="h2">
        {t('hello')}
      </Typography>
      <Typography variant="h1" component="h2">
        {t('hello')}
      </Typography>
      <Typography variant="h1" component="h2">
        {t('hello')}
      </Typography>
      <Typography variant="h1" component="h2">
        {t('hello')}
      </Typography>
    </>
  );
}
