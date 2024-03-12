import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InputPassword, InputText } from '@components/inputs';
import { LinkText } from '@components/texts';
import { USER } from '@configs/mock-user';
import { loginSchema } from '@helpers/schemas';
import useUserStore from '@stores/userStore';

type LoginFormValues = {
  email: string;
  password: string;
};

export function LoginPage() {
  const { t } = useTranslation();
  const { updateUserInfo } = useUserStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    if (data.email === USER.email && data.password === USER.password) {
      updateUserInfo({
        username: USER.username,
        email: USER.email,
        token: 'jwt-token',
      });
      navigate({ to: '/' });
    }
  };

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
              label={t('email')}
              {...register('email')}
              formError={errors.email}
            />

            <InputPassword
              label={t('password')}
              {...register('password')}
              formError={errors.password}
            />

            <Stack alignItems="flex-end" gap={1}>
              <LinkText
                text={t('forgotPassword')}
                to="/auth/forgot-password"
                variant="body2"
                color="gray"
              />
              <Button type="submit" fullWidth>
                {t('login')}
              </Button>
            </Stack>

            <LinkText
              text="You don't have an account? Sign up"
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
