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
      },
    },
  },
}
