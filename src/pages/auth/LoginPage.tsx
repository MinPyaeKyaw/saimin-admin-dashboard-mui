import { Button, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useForm } from '@tanstack/react-form';
import { TextLink } from '@components/common/TextLink';
// import { TextInput } from '@components/inputs';

export function LoginPage() {
  const { Provider, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
    },
    // onSubmit: async ({ value }) => {
    //   // Do something with form data
    //   //   console.log(value);
    // },
  });

  return (
    <Stack
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Paper
        sx={{
          padding: 2,
          width: {
            xs: '95%',
            sm: '90%',
            md: '30%',
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
                Welcome Back!
              </Typography>

              <Typography color="gray" textAlign="center" variant="body2">
                Please Log in to continue
              </Typography>

              {/* <TextInput name="email" /> */}

              <TextField fullWidth label="Email" variant="outlined" />

              <TextField fullWidth label="Password" variant="outlined" />

              <Stack alignItems="flex-end" gap={1}>
                <TextLink
                  text="Forgot password?"
                  to="/auth/forgot-password"
                  variant="body2"
                  color="gray"
                />
                <Button fullWidth>Login</Button>
              </Stack>

              <TextLink
                text="Already have an account?"
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
