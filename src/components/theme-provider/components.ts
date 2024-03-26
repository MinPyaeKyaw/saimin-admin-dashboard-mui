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
        borderRadius: 1,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
  MuiInputLabel: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiSelect: {
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
