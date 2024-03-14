import { forwardRef } from 'react';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  RadioGroupProps,
  FormControl,
  FormLabel,
} from '@mui/material';
import { FieldError } from 'react-hook-form';

interface Props {
  label: string;
  formError: FieldError | undefined;
  data: { label: string; value: string }[];
}

// eslint-disable-next-line react/display-name
export const RadioGroupBox = forwardRef(
  ({ formError, data, ...props }: Props & RadioGroupProps, ref) => {
    return (
      <FormControl>
        <FormLabel>Gender</FormLabel>
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
      </FormControl>
    );
  }
);
