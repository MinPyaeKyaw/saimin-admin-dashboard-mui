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
  text: requiredString('This field is required!'),
  select: requiredString('This field is required!'),
  radioColumn: requiredString('This field is required!'),
  radioRow: requiredString('This field is required!'),
  singleCheckbox: requiredBoolean('This field is required!'),
  checkboxGroup: requiredString('This field is required!'),
});
