import * as z from 'zod';

const requiredString = (message: string) => {
  return z.string().min(1, { message });
};

// const requiredBoolean = (message: string) => {
//   return z.literal<boolean>(true, {
//     errorMap: () => ({ message }),
//   });
// };

/**
 * TODO: You need to add specific field name with ":" as a prefix of every error message.
 * * For instance, "email:User email is required!", "username:User email is required!".
 * * I created a hook called "useFormError" in hooks folder.
 * * That hook receives errors as strings from this schema and returns error object.
 * * Because, Tanstack form currently doesn't provide the error object.
 */

export const loginSchema = z.object({
  email: requiredString('email:Phone number is required!'),
  password: requiredString('password:Password is required!'),
});
