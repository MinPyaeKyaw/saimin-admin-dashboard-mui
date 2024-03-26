// import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import { DataTable } from '@components/tables';
import { useGetAllProducts } from '@services/products-queries';

export function PostsPage() {
  const navigate = useNavigate();
  // const [paginationParams, setPaginationParams] = useState<PaginationParams>({
  //   pageSize: 5,
  //   page: 0,
  // });

  const { data, isLoading } = useGetAllProducts({
    pageSize: 5,
    page: 0,
  });

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box sx={{ marginBottom: 3 }}>
        <Button
          variant="contained"
          onClick={() => navigate({ to: '/products/create' })}
        >
          Go to create
        </Button>
      </Box>

      <Box
        sx={{
          width: 1000,
        }}
      >
        {isLoading ? 'loading' : <DataTable data={data.products} />}
      </Box>
    </Box>
  );
}
