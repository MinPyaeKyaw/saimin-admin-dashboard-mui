import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  RadioGroupProps,
} from '@mui/material';
import { FieldError } from 'react-hook-form';

interface Props {
  label: string;
  formError: FieldError | undefined;
  data: { label: string; value: string }[];
}

export function RadioGroupBox({
  label,
  formError,
  data,
  ...props
}: Props & RadioGroupProps) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        {...props}
      >
        {data.map((d) => (
          <FormControlLabel
            key={d.value}
            value={d.value}
            control={<Radio />}
            label={d.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
