import * as z from 'zod';

const requiredString = (message: string) => {
  return z.string().min(1, { message });
};

const requiredBoolean = (message: string) => {
  return z.literal<boolean>(true, {
    errorMap: () => ({ message }),
  });
};

export const loginSchema = z.object({
  email: requiredString('Email is required!'),
  password: requiredString('Password is required!'),
});

export const signupSchema = z.object({
  username: requiredString('Username is required!'),
  email: requiredString('Email is required!'),
  password: requiredString('Password is required!'),
  terms: requiredBoolean('Need to agree our terms & conditions!'),
});

export const exampleSchema = z.object({
  requiredField: requiredString('This field is required!'),
  email: requiredString('Email is required!'),
  password: requiredString('Password is required!'),
  terms: requiredBoolean('Need to agree our terms & conditions!'),
});
