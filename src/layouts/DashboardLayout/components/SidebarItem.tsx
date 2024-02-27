import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
  menu: MenuType;
}

export function SidebarItem({
  active,
  menu,
  ...props
}: Props & ButtonBaseProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  const [openCollapse, setOpenCollapse] = useState<boolean>(false);

  /**
   * * If there is no children inside menu,
   * * route to specific page.
   * * Other wise, toggle the collpase
   */
  const handleClick = (): void => {
    if (menu.children) {
      setOpenCollapse(!openCollapse);
    } else {
      navigate({
        to: menu.route,
      });
    }
  };

  return (
    <ButtonBase
      onClick={handleClick}
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
  );
}
