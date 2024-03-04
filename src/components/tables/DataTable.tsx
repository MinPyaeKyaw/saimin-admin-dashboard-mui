// import { SetStateAction, useEffect, useState } from 'react';
// import { Box, Pagination } from '@mui/material';
// import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
// import { capitalizeFirstLetter } from '@helpers/ui';

// // const columns: GridColDef[] = [
// //   { field: 'id', headerName: 'ID', minWidth: 100, maxWidth: 200 },
// //   {
// //     field: 'firstName',
// //     headerName: 'First name',
// //     minWidth: 200,
// //     maxWidth: 500,
// //   },
// //   { field: 'lastName', headerName: 'Last name', minWidth: 200, maxWidth: 500 },
// //   {
// //     field: 'age',
// //     headerName: 'Age',
// //     minWidth: 150,
// //     maxWidth: 500,
// //   },
// //   {
// //     field: 'fullName',
// //     headerName: 'Full name',
// //     description: 'This column has a value getter and is not sortable.',
// //     sortable: false,
// //     minWidth: 200,
// //     maxWidth: 500,
// //     valueGetter: (params: GridValueGetterParams) =>
// //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
// //   },
// // ];

// // const rows = [
// //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// // ];

// interface Props {
//   data: any[];
//   meta: any;
//   onPaginationChange: SetStateAction<PaginationParams>;
// }

// export function DataTable({ data, meta, onPaginationChange }: Props) {
//   const [columns, setcolumns] = useState<GridColDef[]>([]);

//   useEffect(() => {
//     // Generating columns
//     if (data) {
//       const cols = Object.keys(data[0]).map((col) => ({
//         field: col,
//         headerName: capitalizeFirstLetter(col),
//         width: 170,
//       }));
//       setcolumns(cols);
//     }
//   }, [data]);

//   return (
//     <Box width={900}>
//       <DataGrid
//         rows={data || []}
//         columns={columns}
//         initialState={{
//           pagination: {
//             // eslint-disable-next-line no-unsafe-optional-chaining
//             paginationModel: { page: 0, pageSize: meta?.total / 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10, 20]}
//         // onPaginationModelChange={(e) => console.log('haha', e)}
//         checkboxSelection
//       />

//       <Pagination count={3} shape="rounded" color="primary" />
//     </Box>
//   );
// }
