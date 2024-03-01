import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function DashboardPage() {
  const { t } = useTranslation();

  return (
    <Typography variant="h1" component="h2">
      {t('hello')}
    </Typography>
  );
}
