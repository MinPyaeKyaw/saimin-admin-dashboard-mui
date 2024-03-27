import { Box } from '@mui/material';
import { DataTable } from '@components/tables';
import { useGetAllProducts } from '@services/products-queries';
import { TableTitle, TableTopToolbar, tableAction } from './components';

export function PostsPage() {
  const {
    data = [],
    isLoading,
    isRefetching,
    refetch,
  } = useGetAllProducts({
    pageSize: 5,
    page: 0,
  });

  return (
    <Box>
      <DataTable
        isLoading={isLoading || isRefetching}
        data={data.products}
        title={<TableTitle />}
        topToolbar={<TableTopToolbar refetch={refetch} />}
        colsToRemove={['images', 'thumbnail']}
        enableRowSelection
        enableRowActions
        pinActions
        pinSelectors
        actionCells={tableAction}
      />
    </Box>
  );
}
