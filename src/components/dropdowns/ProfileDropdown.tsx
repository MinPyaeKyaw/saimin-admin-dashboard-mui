import * as React from 'react';
import { useState } from 'react';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import {
  Tooltip,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Avatar,
  Stack,
  Box,
  Divider,
  ListItemText,
} from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useNavigate } from '@tanstack/react-router';
import useGetMenus from '@hooks/useMenus';

interface Props {
  user: {
    profileImg: string;
    username: string;
    position: string;
  };
}

export function ProfileDropdown({ user }: Props) {
  const { profileMenus } = useGetMenus();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // * variables for toggling dropdown
  const open = Boolean(anchorEl);
  const id = open ? 'profile-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Profile">
        <IconButton aria-describedby={id} onClick={handleClick}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt={user.username}
            src={user.profileImg}
          />
        </IconButton>
      </Tooltip>

      <Popover
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <List sx={{ width: 350, padding: 0 }}>
          <ListItem>
            <Stack
              direction="row"
              alignContent="center"
              justifyContent="space-between"
              width="100%"
            >
              <Stack direction="row" alignContent="center" gap={2}>
                <Avatar
                  alt={user.username}
                  src={user.profileImg}
                  sx={{ width: 56, height: 56 }}
                />
                <Box>
                  <Typography fontWeight="bold">{user.username}</Typography>
                  <Typography variant="caption">{user.position}</Typography>
                </Box>
              </Stack>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconButton>
                  <LoginOutlinedIcon color="primary" />
                </IconButton>
              </Box>
            </Stack>
          </ListItem>

          <Divider component="li" />

          {profileMenus.map((menu) => (
            <ListItem key={menu.route} disablePadding>
              <ListItemButton onClick={() => navigate({ to: menu.route })}>
                {menu.icon}
                <ListItemText primary={menu.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
}
