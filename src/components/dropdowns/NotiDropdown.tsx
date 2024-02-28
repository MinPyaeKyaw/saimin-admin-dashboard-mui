import { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Tooltip,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  Stack,
} from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export function NotiDropdown() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // * variables for toggling dropdown
  const open = Boolean(anchorEl);
  const id = open ? 'noti-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Notifications">
        <IconButton aria-describedby={id} onClick={handleClick}>
          <NotificationsIcon color="primary" />
        </IconButton>
      </Tooltip>

      <Popover
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <List sx={{ width: 350, bgcolor: 'background.paper', padding: 0 }}>
          <ListItem disablePadding>
            <Typography
              variant="h6"
              paddingY={2}
              paddingX={2}
              width="100%"
              fontWeight="bold"
              color="primary"
            >
              Notifications
            </Typography>
          </ListItem>

          <Divider component="li" />

          {/*
           * Beginning of Limitted Notification List
           */}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItemButton>
          </ListItem>

          {/*
           * End of Limitted Notification List
           */}

          <Divider component="li" />

          <ListItem disablePadding>
            <ListItemButton>
              <Typography
                paddingY={1}
                width="100%"
                textAlign="center"
                color="primary"
              >
                View All
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}
