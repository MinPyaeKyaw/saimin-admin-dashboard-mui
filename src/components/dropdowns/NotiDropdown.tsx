import { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
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

  const mockData = [
    {
      id: 1,
      title: 'Notification One',
      description: 'This is the description of nofitication one',
      icon: <ImageIcon />,
    },
    {
      id: 2,
      title: 'Notification Two',
      description: 'This is the description of nofitication two',
      icon: <ImageIcon />,
    },
    {
      id: 3,
      title: 'Notification Three',
      description: 'This is the description of nofitication three',
      icon: <ImageIcon />,
    },
    {
      id: 4,
      title: 'Notification Four',
      description: 'This is the description of nofitication four',
      icon: <ImageIcon />,
    },
  ];

  return (
    <>
      <Tooltip title="Notifications">
        <IconButton aria-describedby={id} onClick={handleClick}>
          <NotificationsOutlinedIcon color="primary" />
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
          {mockData.map((noti) => (
            <ListItem key={noti.id} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>{noti.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={noti.title}
                  secondary={noti.description}
                />
              </ListItemButton>
            </ListItem>
          ))}

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
    </>
  );
}
