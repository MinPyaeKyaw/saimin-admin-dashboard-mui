// import { ComponentProps } from 'react';
// import { TextField } from '@mui/material';
// import { Field } from '@tanstack/react-form';

// interface Props {
//   name: string;
// }

// export function TextInput({ name, ...props }: Props & ComponentProps<'input'>) {
//   return (
//     <Field
//       name={name}
//       children={({ state, handleChange, handleBlur }) => {
//         return (
//           <TextField
//             variant="outlined"
//             {...props}
//             defaultValue={state.value}
//             onChange={(e) => handleChange(e.target.value as any)}
//             onBlur={handleBlur}
//           />
//         );
//       }}
//     />
//   );
// }
