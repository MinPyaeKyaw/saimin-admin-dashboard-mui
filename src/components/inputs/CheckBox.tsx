import { forwardRef } from 'react';
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { FieldError } from 'react-hook-form';

interface Props {
  label: string;
  formError: FieldError | undefined;
}

// eslint-disable-next-line react/display-name
export const CheckBox = forwardRef(
  ({ label, formError, ...props }: Props & CheckboxProps, ref) => {
    return (
      <FormControlLabel
        inputRef={ref}
        control={<Checkbox {...props} />}
        label={
          <>
            <Typography fontSize={props.size || 'small'}>{label}</Typography>
            {formError?.message && (
              <Typography fontSize="small" color="error">
                {formError.message}
              </Typography>
            )}
          </>
        }
        labelPlacement="end"
      />
    );
  }
);

// export function CheckBox({
//   label,
//   formError,
//   ...props
// }: Props & CheckboxProps) {
//   return (
//     <FormControl>
//       <FormControlLabel
//         value="end"
//         control={<Checkbox {...props} />}
//         label={
//           <>
//             <Typography fontSize={props.size || 'small'}>{label}</Typography>
//             {formError?.message && (
//               <Typography fontSize="small" color="error">
//                 {formError.message}
//               </Typography>
//             )}
//           </>
//         }
//         labelPlacement="end"
//       />
//     </FormControl>
//   );
// }
