import { ReactNode } from 'react';
import {
  ButtonBase,
  ButtonBaseProps,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

interface Props {
  active: boolean;
  icon?: ReactNode;
  name: string;
}

export function MenuItem({
  active,
  name,
  icon,
  ...props
}: Props & ButtonBaseProps) {
  const theme = useTheme();

  return (
    <ButtonBase
      sx={{
        width: '100%',
        paddingY: 1.5,
        fontSize: 16,
        borderRadius: 1,
        '&:hover': {
          background: theme.palette.action.hover,
        },
      }}
      {...props}
    >
      <Stack direction="row" width="100%">
        {icon}
        <Typography>{name}</Typography>
      </Stack>
    </ButtonBase>
  );
}
