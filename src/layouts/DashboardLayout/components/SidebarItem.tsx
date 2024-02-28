import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  ButtonBase,
  ButtonBaseProps,
  Collapse,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useNavigate, useRouterState } from '@tanstack/react-router';

interface Props {
  active: boolean;
  menu: MenuType;
}

export function SidebarItem({
  active,
  menu,
  ...props
}: Props & ButtonBaseProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const routerState = useRouterState();

  const [openCollapse, setOpenCollapse] = useState<boolean>(false);

  const handleClick = (): void => {
    if (menu.children) {
      setOpenCollapse(!openCollapse);
    } else {
      navigate({
        to: menu.route,
      });
    }
  };

  const handleChildClick = (route: string): void => {
    navigate({
      to: route,
    });
  };

  const hasActiveChild = (): boolean => {
    if (menu.children) {
      return !!menu.children.find(
        (child) => child.route === routerState.location.pathname
      );
    }

    return false;
  };

  return (
    <Stack width="100%">
      <ButtonBase
        onClick={handleClick}
        sx={{
          width: '100%',
          paddingY: 1.5,
          fontSize: 16,
          borderRadius: 1,
          /**
           * * Only when it is active or has active child,
           * * Set the text and icon colors white.
           */
          color:
            active || hasActiveChild() ? 'white' : theme.palette.text.primary,
          /**
           * * Only when it is active or has active child,
           * * Set the background color primary.
           */
          ...(active || hasActiveChild()
            ? { background: theme.palette.primary.main }
            : {}),
          /**
           * * Only when it is not active or has no active child,
           * * Apply the hover effect.
           */
          ...(!active && !hasActiveChild()
            ? {
                '&:hover': {
                  background: theme.palette.action.hover,
                },
              }
            : {}),
        }}
        {...props}
      >
        <Stack direction="row" width="100%">
          {menu.icon}

          <Stack direction="row" justifyContent="space-between" width="100%">
            <Typography>{menu.name}</Typography>

            {/* Only if the children inside menu is existed */}
            {menu.children &&
              (openCollapse ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              ))}
          </Stack>
        </Stack>
      </ButtonBase>

      {/* Child Sidebar Items */}
      {menu.children && (
        <Collapse in={openCollapse}>
          <Stack gap={1} marginTop={1}>
            {menu.children.map((child) => (
              <ButtonBase
                key={child.id}
                onClick={() => handleChildClick(child.route)}
                sx={{
                  width: '100%',
                  paddingY: 1,
                  paddingLeft: 2,
                  fontSize: 16,
                  borderRadius: 1,
                  color:
                    routerState.location.pathname === child.route
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  '&:hover': {
                    background: theme.palette.action.hover,
                  },
                }}
                {...props}
              >
                <Stack direction="row" width="100%">
                  {child.icon}

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Typography>{child.name}</Typography>
                  </Stack>
                </Stack>
              </ButtonBase>
            ))}
          </Stack>
        </Collapse>
      )}
    </Stack>
  );
}
