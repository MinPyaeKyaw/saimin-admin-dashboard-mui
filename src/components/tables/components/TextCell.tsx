import { Typography } from '@mui/material';
import { truncateText } from '@helpers/ui';

interface Props {
  text: string;
}

export function TextCell({ text }: Props) {
  return (
    <Typography variant="body2" noWrap>
      {truncateText(text, 40)}
    </Typography>
  );
}
