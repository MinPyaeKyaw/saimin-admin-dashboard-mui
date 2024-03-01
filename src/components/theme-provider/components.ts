/**
 * Customizable config of MUI Components
 */
export const components: any = {
  MuiButton: {
    defaultProps: {
      disableRipple: false,
      size: 'medium',
      variant: 'contained',
      sx: {
        color: 'white',
        borderRadius: 1,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiPaper: {
    defaultProps: {
      variant: 'outlined',
    },
  },
  MuiPopover: {
    defaultProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    },
  },
};
