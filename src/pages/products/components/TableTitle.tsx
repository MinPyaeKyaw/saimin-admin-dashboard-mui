import { Stack, Typography, Button } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';

export function TableTitle() {
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      my={2}
    >
      <Typography variant="h5" fontWeight="bold">
        Products
      </Typography>
      <Button onClick={() => navigate({ to: '/products/create' })}>
        Create More Products
      </Button>
    </Stack>
  );
}
