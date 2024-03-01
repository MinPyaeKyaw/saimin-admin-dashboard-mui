import { Button, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useForm } from '@tanstack/react-form';
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
                <Typography color="gray" textAlign="center" variant="body2">
                  Forgot password?
                </Typography>

                <Button fullWidth>Login</Button>
              </Stack>

              <Typography color="gray" textAlign="center" variant="body2">
                Already have an account?
              </Typography>
            </Stack>
          </form>
        </Provider>
      </Paper>
    </Stack>
  );
}
