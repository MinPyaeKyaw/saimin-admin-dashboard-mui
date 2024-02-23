import { SIDEBAR_WIDTH } from '@configs/ui-consts';

export function getSidebarWidth(sideBarOpen: boolean): number {
  if (!sideBarOpen) return 0;
  return SIDEBAR_WIDTH;
}
