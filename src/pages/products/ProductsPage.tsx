import { Button } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';

export function PostsPage() {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      onClick={() => navigate({ to: '/products/create' })}
    >
      Go to create
    </Button>
  );
}
