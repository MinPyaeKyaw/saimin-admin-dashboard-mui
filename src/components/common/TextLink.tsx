import { Typography, TypographyProps, useTheme } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';

interface Props {
  text: string;
  to: string;
}

export function TextLink({ text, to, ...props }: Props & TypographyProps) {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Typography
      onClick={() => navigate({ to })}
      sx={{
        cursor: 'pointer',
        '&:hover': {
          color: theme.palette.primary.main,
        },
      }}
      {...props}
    >
      {text}
    </Typography>
  );
}
