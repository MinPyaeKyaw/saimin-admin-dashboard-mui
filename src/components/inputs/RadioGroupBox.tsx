import { forwardRef } from 'react';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  RadioGroupProps,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material';
import { FieldError } from 'react-hook-form';

interface Props {
  label: string;
  formError: FieldError | undefined;
  data: { label: string; value: string }[];
}

// eslint-disable-next-line react/display-name
export const RadioGroupBox = forwardRef(
  ({ formError, label, data, ...props }: Props & RadioGroupProps, ref) => {
    return (
      <FormControl error={!!formError?.message}>
        <FormLabel id="demo-error-radios">{label}</FormLabel>
        <RadioGroup
          name="gender"
          defaultValue={props.defaultValue || ''}
          {...props}
        >
          {data.map((d) => (
            <FormControlLabel
              key={d.value}
              value={d.value}
              control={<Radio />}
              label={d.label}
              inputRef={ref}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{formError?.message}</FormHelperText>
      </FormControl>
    );
  }
);
