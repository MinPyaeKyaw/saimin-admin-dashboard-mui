import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Tooltip } from '@mui/material';

interface Props {
  refetch: () => void;
}

export function TableTopToolbar({ refetch }: Props) {
  return (
    <Tooltip title="Refresh">
      <IconButton onClick={refetch}>
        <RefreshIcon />
      </IconButton>
    </Tooltip>
  );
}
