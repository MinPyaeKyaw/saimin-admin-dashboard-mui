import { Button, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { useTranslation } from 'react-i18next';
import { TextLink } from '@components/common';
import { PasswordInput, TextInput } from '@components/inputs';
import { loginSchema } from '@helpers/schemas';
// import useFormError from '@hooks/useFormError';

export function LoginPage() {
  const { t } = useTranslation();

  const { Provider, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validatorAdapter: zodValidator,
    validators: {
      onSubmit: loginSchema,
    },
    // onSubmit: async ({ value }) => {
    //   console.log('submit', value);
    // },
  });

  // console.log('values', state);

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
        <Provider>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleSubmit();
            }}
          >
            <Stack width="100%" gap={3}>
              <Typography variant="h2" textAlign="center">
                {t('welcomeback')}
              </Typography>

              <Typography color="gray" textAlign="center" variant="body2">
                {t('pleaselogin')}
              </Typography>

              <TextInput name="email" label={t('email')} />

              <PasswordInput name="password" label={t('password')} />

              <Stack alignItems="flex-end" gap={1}>
                <TextLink
                  text={t('forgotPassword')}
                  to="/auth/forgot-password"
                  variant="body2"
                  color="gray"
                />
                <Button type="submit" fullWidth>
                  {t('login')}
                </Button>
              </Stack>

              <TextLink
                text={t('alreadyHaveAcc')}
                to="/auth/sign-up"
                variant="body2"
                color="gray"
                textAlign="center"
              />
            </Stack>
          </form>
        </Provider>
      </Paper>
    </Stack>
  );
}
