import { useMemo } from 'react';
import { AccountCircle, Send } from '@mui/icons-material';
import { MenuItem, ListItemIcon } from '@mui/material';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { convertCamelCaseToSpacedString } from '@helpers/ui';

interface Props {
  data: Array<any>;
}

export function DataTable({ data }: Props) {
  const columns = useMemo(
    () =>
      Object.keys(data[0]).map((col) => ({
        accessorKey: col,
        header: convertCamelCaseToSpacedString(col),
      })),
    [data]
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: {
      columnPinning: {
        left: ['mrt-row-select'],
        right: ['mrt-row-actions'],
      },
    },
    enableRowSelection: true,
    enableRowActions: true,
    enableDensityToggle: false,
    enableColumnPinning: true,
    paginationDisplayMode: 'pages',
    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        View Profile
      </MenuItem>,
      <MenuItem key={1} onClick={() => closeMenu()} sx={{ m: 0 }}>
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        Send Email
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
}
