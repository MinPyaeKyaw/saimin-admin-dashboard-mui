import { Button, Box, useTheme, Typography, Stack } from '@mui/material';
import useModalManager from '@hooks/useModalManager';

export function Message() {
  const theme = useTheme();
  const { openModal } = useModalManager();

  const handleClick = () => {
    openModal(
      <Box>
        <Typography fontSize="large" fontWeight="bold" textAlign="center">
          လီးပဲ ဟျောင့်
        </Typography>
      </Box>
    );
  };

  return (
    <Stack
      sx={{
        // backgroundColor: theme.palette.secondary.main,
        background: `linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
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
        You can check how to develop optimized modal components in this
        component.
      </Typography>

      <Box>
        <Button
          onClick={handleClick}
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
