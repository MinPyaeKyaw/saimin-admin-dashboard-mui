import { Button } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
// import { useGetAllProducts } from '@services/products-queries';

export function PostsPage() {
  const navigate = useNavigate();

  // const { data, isLoading } = useGetAllProducts();

  // if (isLoading) return <h1>Loading</h1>;

  return (
    <Button
      variant="contained"
      onClick={() => navigate({ to: '/products/create' })}
    >
      Go to create
    </Button>
  );
}
