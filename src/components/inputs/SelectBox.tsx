import {
  Select,
  MenuItem,
  SelectProps,
  FormControl,
  InputLabel,
} from '@mui/material';
import { FieldError } from 'react-hook-form';

interface Props {
  formError: FieldError | undefined;
  data: { label: string; value: string }[];
}

export function SelectBox({ formError, data, ...props }: Props & SelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        {...props}
      >
        {data.map((d) => (
          <MenuItem key={d.value} value={d.value}>
            {d.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
