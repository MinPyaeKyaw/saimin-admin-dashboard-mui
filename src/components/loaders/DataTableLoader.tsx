import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

export function DataTableLoader() {
  // Defining table columns
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((col) => ({
    accessorKey: col.toString(),
    header: 'loading...',
  }));

  const table = useMaterialReactTable({
    columns,
    data: [],
    enableDensityToggle: false,
    enablePagination: true,
    paginationDisplayMode: 'pages',
    muiPaginationProps: {
      color: 'primary',
      rowsPerPageOptions: [10, 20, 30],
      shape: 'rounded',
      variant: 'text',
    },
    state: {
      isLoading: true,
    },
  });

  return <MaterialReactTable table={table} />;
}
