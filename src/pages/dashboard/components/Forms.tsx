import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Grid, MenuItem, Select } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputText } from '@components/inputs';
import { loginSchema } from '@helpers/schemas';

export function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      select: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (): string => {
    return '';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <InputText
            label="Required Field"
            formError={errors.email}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputText
            label="Optional Field"
            formError={errors.email}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            {...register('select')}
            // value={10}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12} md={6}>
          <Button>Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
}
