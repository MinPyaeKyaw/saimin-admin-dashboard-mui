import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { FieldError } from 'react-hook-form';

interface Props {
  formError: FieldError | undefined;
}

// eslint-disable-next-line react/display-name
export const InputText = forwardRef(
  ({ formError, ...props }: Props & TextFieldProps, ref) => {
    return (
      <TextField
        {...props}
        inputRef={ref}
        error={!!formError}
        helperText={formError?.message}
      />
    );
  }
);
