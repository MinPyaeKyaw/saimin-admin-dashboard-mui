import { ReactNode, useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { DataTableLoader } from '@components/loaders';
import { convertCamelCaseToSpacedString, isURL } from '@helpers/ui';
import { TextCell } from './components';

interface Props {
  isLoading: boolean;
  data: Array<any>;
  title?: ReactNode;
  topToolbar?: ReactNode;
  enableRowSelection: boolean;
  enableRowActions: boolean;
  rightPinnedCols?: string[];
  leftPinnedCols?: string[];
  pinActions?: boolean;
  pinSelectors?: boolean;
}

export function DataTable({
  isLoading,
  data,
  title,
  topToolbar,
  enableRowSelection = false,
  enableRowActions = false,
  rightPinnedCols = [],
  leftPinnedCols = [],
  pinActions = false,
  pinSelectors = false,
}: Props) {
  // Defining table column
  const columns = useMemo(() => {
    if (!isLoading) {
      return Object.keys(data[0])
        .filter((col) => {
          /**
           * Removing images and links from table columns
           */
          if (
            (typeof data[0][col] === 'string' ||
              typeof data[0][col] === 'number') &&
            !isURL(data[0][col])
          ) {
            return true;
          }

          return false;
        })
        .map((col) => ({
          accessorKey: col,
          header: convertCamelCaseToSpacedString(col),
          Cell: ({ cell }: any) => <TextCell text={cell.getValue()} />,
        }));
    }

    return [];
  }, [data, isLoading]);

  /**
   *  Defining columns to pin at right side
   *  Action cells are pinned at right side always
   */
  const rightPinnedColumns = useMemo(() => {
    if (pinActions) return [...rightPinnedCols, 'mrt-row-actions'];

    return rightPinnedCols;
  }, [pinActions, rightPinnedCols]);

  /**
   *  Defining columns to pin at left side
   *  Selector cells are pinned at left side always
   */
  const leftPinnedColumns = useMemo(() => {
    if (pinSelectors) return [...leftPinnedCols, 'mrt-row-select'];

    return leftPinnedCols;
  }, [pinSelectors, leftPinnedCols]);

  // Generating table properties
  const table = useMaterialReactTable({
    columns,
    data: isLoading ? [] : data,
    initialState: {
      columnPinning: {
        left: leftPinnedColumns,
        right: rightPinnedColumns,
      },
    },
    enableRowSelection,
    enableRowActions,
    enableDensityToggle: false,
    enableColumnPinning: true,
    enablePagination: true,
    paginationDisplayMode: 'pages',
    muiPaginationProps: {
      color: 'primary',
      rowsPerPageOptions: [10, 20, 30],
      shape: 'rounded',
      variant: 'text',
    },
    // renderRowActionMenuItems: ({ closeMenu }) => actoinCells(closeMenu),
    renderTopToolbarCustomActions: () => topToolbar,
  });

  return (
    <>
      {title}

      {isLoading ? <DataTableLoader /> : <MaterialReactTable table={table} />}
    </>
  );
}
