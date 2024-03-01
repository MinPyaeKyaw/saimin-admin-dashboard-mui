import { useState } from 'react';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { Field } from '@tanstack/react-form';

interface Props {
  name: string;
}

export function PasswordInput({ name, ...props }: Props & TextFieldProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Field
      name={name}
      children={({ state, handleChange, handleBlur }) => {
        return (
          <TextField
            {...props}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((prev) => !prev)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            defaultValue={state.value}
            onChange={(e) => handleChange(e.target.value as any)}
            onBlur={handleBlur}
          />
        );
      }}
    />
  );
}
