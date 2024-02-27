import { ReactNode } from 'react';
import {
  ButtonBase,
  ButtonBaseProps,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useNavigate } from '@tanstack/react-router';

interface Props {
  active: boolean;
  menu: {
    id: number;
    name: string;
    icon: ReactNode;
    route: string;
  };
}

export function MenuItem({ active, menu, ...props }: Props & ButtonBaseProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <ButtonBase
      onClick={() =>
        navigate({
          to: menu.route,
        })
      }
      sx={{
        width: '100%',
        paddingY: 1.5,
        fontSize: 16,
        borderRadius: 1,
        color: active ? 'white' : theme.palette.text.primary,
        ...(active && { background: theme.palette.primary.main }),
        ...(!active && {
          '&:hover': {
            background: theme.palette.action.hover,
          },
        }),
      }}
      {...props}
    >
      <Stack direction="row" width="100%">
        {menu.icon}
        <Typography>{menu.name}</Typography>
      </Stack>
    </ButtonBase>
  );
}
