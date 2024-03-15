import { Box, Typography } from '@mui/material';
import { Center } from '@components/common/Center';

export function Error502() {
  return (
    <Center width="100%" height="100%">
      <Box>
        <Typography variant="h1" textAlign="center">
          502
        </Typography>
        <Typography variant="body2" textAlign="center">
          Bad Gateway!
        </Typography>
      </Box>
    </Center>
  );
}
