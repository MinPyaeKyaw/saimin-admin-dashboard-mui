/**
 * Customizable config of MUI Components
 */
export const components = {
  MuiAppBar: {
    defaultProps: {
      sx: {
        boxShadow: 'none',
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableRipple: false,
      size: 'large',
      sx: {
        borderRadius: 2,
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
