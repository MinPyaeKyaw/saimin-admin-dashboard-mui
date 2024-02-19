import { MENUBAR_HEIGHT } from '@configs/ui-consts';
import { Stack, Typography } from '@mui/material';

export function MenuBar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: '100%',
        height: MENUBAR_HEIGHT,
        backgroundColor: 'pink',
      }}
    >
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
    </Stack>
  );
}
