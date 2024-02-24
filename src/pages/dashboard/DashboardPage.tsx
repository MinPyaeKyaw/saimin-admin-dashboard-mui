import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useUserPreferencesStore from '@stores/userPreferencesStore';
import { ChangeLangDropdown } from '@components/dropdowns';

export function DashboardPage() {
  const { t, i18n } = useTranslation();
  const { changeMode, mode } = useUserPreferencesStore();

  const handleChangeMode = (): void => {
    if (mode === 'light') {
      changeMode('dark');
    } else {
      changeMode('light');
    }
  };

  return (
    <>
      <Button onClick={handleChangeMode} variant="contained">
        change mode
      </Button>

      <ChangeLangDropdown />

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
