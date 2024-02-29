import { ReactNode, useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useRouterState, useNavigate } from '@tanstack/react-router';

export default function useGetBreadcrumbs() {
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
        >
          <Typography>{breadcrumb}</Typography>
        </Box>
      );
    });

    setBreadcrumbs(breadcrumbList);
  }, [navigate, routerState.location.pathname]);

  return breadcrumbs;
}
