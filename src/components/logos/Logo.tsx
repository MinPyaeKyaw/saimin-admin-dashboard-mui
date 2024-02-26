import { Box } from '@mui/material';
import LogoImg from '@assets/images/logo/logo.png';

interface Props {
  w?: number | string;
  h?: number | string;
}

export function Logo({ w = 'auto', h = 'auto' }: Props) {
  return (
    <Box width={w} height={h}>
      <img src={LogoImg} alt="Sai Min" loading="lazy" height="100%" />
    </Box>
  );
}
