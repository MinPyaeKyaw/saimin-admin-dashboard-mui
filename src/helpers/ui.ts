import { SIDEBAR_WIDTH } from '@configs/ui-consts';

export function getSidebarWidth(sideBarOpen: boolean): number {
  if (!sideBarOpen) return 0;
  return SIDEBAR_WIDTH;
}

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
