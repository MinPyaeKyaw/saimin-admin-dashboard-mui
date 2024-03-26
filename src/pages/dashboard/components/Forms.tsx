import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Grid, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import {
  CheckBox,
  InputText,
  RadioGroupBox,
  SelectBox,
} from '@components/inputs';
import { exampleSchema } from '@helpers/schemas';

export function Forms() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: '',
      singleCheckbox: '',
      select: '',
      radioRow: '',
      radioColumn: '',
    },
    resolver: zodResolver(exampleSchema),
  });

  const onSubmit = (): string => {
    return '';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <InputText
            label="Required Text Field"
            formError={errors.text}
            fullWidth
            {...register('text')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <SelectBox
            label="Required Select Box"
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
          <RadioGroupBox
            label="Required Verticle Radio"
            data={[
              { label: 'Ten', value: '10' },
              { label: 'Twenty', value: '20' },
              { label: 'Thirty', value: '30' },
            ]}
            {...register('radioColumn')}
            formError={errors.radioColumn}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <RadioGroupBox
            label="Required Horizontal Radio"
            row
            data={[
              { label: 'Ten', value: '10' },
              { label: 'Twenty', value: '20' },
              { label: 'Thirty', value: '30' },
            ]}
            {...register('radioRow')}
            formError={errors.radioRow}
          />
        </Grid>

        <Grid item xs={12}>
          <CheckBox
            label="Requried Single Check Box"
            size="small"
            {...register('singleCheckbox')}
            formError={errors.singleCheckbox}
          />
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={2} direction="row" justifyContent="flex-end">
            <Button onClick={() => reset()} variant="outlined">
              Reset
            </Button>

            <Button type="submit">Submit</Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
