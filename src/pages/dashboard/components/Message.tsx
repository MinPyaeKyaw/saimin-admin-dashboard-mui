import { Button, Box, useTheme, Typography, Stack } from '@mui/material';

export function Message() {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.secondary.main,
        paddingX: 3,
        borderRadius: 1,
        height: 330,
      }}
      justifyContent="center"
    >
      <Typography color="white" variant="h3" fontWeight="bold">
        Message From Sai Min
      </Typography>

      <Typography color="white" variant="body2" marginTop={1}>
        Message From Sai Min
      </Typography>

      <Box>
        <Button
          variant="outlined"
          sx={{
            borderColor: 'white',
            color: 'white',
            marginTop: 3,
            '&:hover': {
              borderColor: 'white',
              color: 'white',
            },
          }}
        >
          Read Message
        </Button>
      </Box>
    </Stack>
  );
}
