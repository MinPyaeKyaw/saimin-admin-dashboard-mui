import { Dispatch, SetStateAction } from 'react';
import { Drawer } from '@mui/material';
import { SideBar } from './SideBar';

interface Props {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export function MobileSideBarDrawer({ open, onClose }: Props) {
  return (
    <Drawer open={open} onClose={() => onClose(false)}>
      <SideBar toggleMobileSibebar={onClose} />
    </Drawer>
  );
}
