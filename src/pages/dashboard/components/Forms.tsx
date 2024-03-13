import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputText, RadioGroupBox, SelectBox } from '@components/inputs';
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
            {...register('email')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputText
            label="Optional Field"
            formError={errors.password}
            fullWidth
            {...register('password')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <SelectBox
            label="Age"
            formError={errors.select}
            data={[
              { label: 'Ten', value: '10' },
              { label: 'Twenty', value: '20' },
              { label: 'Thirty', value: '30' },
            ]}
            // {...register('select')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <RadioGroupBox
            label="Gender"
            formError={errors.select}
            data={[
              { label: 'Ten', value: '10' },
              { label: 'Twenty', value: '20' },
              { label: 'Thirty', value: '30' },
            ]}
            {...register('select')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Button>Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
}
