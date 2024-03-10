import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CheckBox, InputPassword, InputText } from '@components/inputs';
import { LinkText } from '@components/texts';
import { signupSchema } from '@helpers/schemas';

type SignupFormValues = {
  username: string;
  email: string;
  password: string;
  terms: boolean;
};

export function SignupPage() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      terms: false,
    },
    resolver: zodResolver(signupSchema),
  });

  console.log('errors', errors);
  const onSubmit = (data: SignupFormValues) => console.log('signup', data);

  return (
    <Stack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Paper
        sx={{
          padding: 2,
          width: {
            xs: '95%',
            sm: '90%',
            md: '40%',
            lg: '30%',
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack width="100%" gap={3}>
            <Typography variant="h2" textAlign="center">
              {t('welcomeback')}
            </Typography>

            <Typography color="gray" textAlign="center" variant="body2">
              {t('pleaselogin')}
            </Typography>

            <InputText
              label={t('username')}
              {...register('username')}
              formError={errors.username}
            />

            <InputText
              label={t('email')}
              {...register('email')}
              formError={errors.email}
            />

            <InputPassword
              label={t('password')}
              {...register('password')}
              formError={errors.password}
            />

            <Stack alignItems="flex-start" gap={1}>
              <CheckBox
                label="Terms & conditions"
                size="small"
                {...register('terms')}
                formError={errors.terms}
              />
              <Button type="submit" fullWidth>
                {t('signup')}
              </Button>
            </Stack>

            <LinkText
              text={t('alreadyHaveAcc')}
              to="/auth/sign-up"
              variant="body2"
              color="gray"
              textAlign="center"
            />
          </Stack>
        </form>
      </Paper>
    </Stack>
  );
}
