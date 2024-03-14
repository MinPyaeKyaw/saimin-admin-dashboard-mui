import { forwardRef } from 'react';
import { MenuItem, TextField, TextFieldProps } from '@mui/material';
import { FieldError } from 'react-hook-form';

interface Props {
  formError: FieldError | undefined;
  data: { label: string; value: string }[];
}

// eslint-disable-next-line react/display-name
export const SelectBox = forwardRef(
  ({ formError, data, ...props }: Props & TextFieldProps, ref) => {
    return (
      <TextField
        inputRef={ref}
        error={!!formError}
        helperText={formError?.message}
        select
        fullWidth
        defaultValue={props.defaultValue || ''}
        {...props}
      >
        {data.map((d) => (
          <MenuItem key={d.value} value={d.value}>
            {d.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }
);
