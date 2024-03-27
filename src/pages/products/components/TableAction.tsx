import { AccountCircle, Send } from '@mui/icons-material';
import { ListItemIcon, MenuItem } from '@mui/material';

export function tableAction() {
  return [
    <MenuItem key={0} sx={{ m: 0 }}>
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      View Profile
    </MenuItem>,
    <MenuItem key={1} sx={{ m: 0 }}>
      <ListItemIcon>
        <Send />
      </ListItemIcon>
      Send Email
    </MenuItem>,
  ];
}
