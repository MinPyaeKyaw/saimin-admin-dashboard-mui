import { ReactNode, useMemo, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useRouterState, useNavigate } from '@tanstack/react-router';

export default function useGetBreadcrumbs() {
  const theme = useTheme();
  const routerState = useRouterState();
  const navigate = useNavigate();

  const [breadcrumbs, setBreadcrumbs] = useState<ReactNode[]>([]);

  useMemo(() => {
    const pathJourney = routerState.location.pathname
      .replace('/', '')
      .split('/');

    const breadcrumbList = pathJourney.map((breadcrumb, i) => {
      // * If it is the last route.
      if (i === pathJourney.length - 1) {
        return (
          <Typography key={breadcrumb} color={i === 0 ? 'inherit' : 'primary'}>
            {breadcrumb}
          </Typography>
        );
      }

      return (
        <Box
          key={breadcrumb}
          onClick={() => navigate({ to: `/${breadcrumb}` })}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <Typography>{breadcrumb}</Typography>
        </Box>
      );
    });

    setBreadcrumbs(breadcrumbList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routerState]);

  return breadcrumbs;
}
