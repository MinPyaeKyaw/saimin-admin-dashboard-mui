// import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
// import { DataTable } from '@components/tables';
// import { useGetAllProducts } from '@services/products-queries';

export function PostsPage() {
  const navigate = useNavigate();
  // const [paginationParams, setPaginationParams] = useState<PaginationParams>({
  //   pageSize: 5,
  //   page: 0,
  // });

  // const { data } = useGetAllProducts(paginationParams);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => navigate({ to: '/products/create' })}
      >
        Go to create
      </Button>

      {/* <DataTable
        data={data?.products}
        meta={data}
        onPaginationChange={(e) => setPaginationParams(e)}
      /> */}
    </>
  );
}
