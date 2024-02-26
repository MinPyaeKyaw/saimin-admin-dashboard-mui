/**
 * Customizable config of MUI Components
 */
export const components: any = {
  MuiButton: {
    defaultProps: {
      disableRipple: false,
      size: 'large',
      sx: {
        borderRadius: 1,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
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
