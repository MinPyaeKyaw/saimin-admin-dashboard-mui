import { SIDEBAR_WIDTH } from '@configs/ui-consts';

export function getSidebarWidth(sideBarOpen: boolean): number {
  if (!sideBarOpen) return 0;
  return SIDEBAR_WIDTH;
}

export function convertCamelCaseToSpacedString(
  camelCaseString: string
): string {
  // Check if the input is empty or not a string
  if (camelCaseString.length === 0) {
    return '';
  }

  // Split the string by uppercase letters
  const wordsArray = camelCaseString.split(/(?=[A-Z])/);

  // Capitalize the first letter of each word and join them with spaces
  const spacedString = wordsArray
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return spacedString;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
}

export function isURL(text: string): boolean {
  // Regular expression pattern to match URLs
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

  // Test if the text matches the URL pattern
  return urlPattern.test(text);
}
