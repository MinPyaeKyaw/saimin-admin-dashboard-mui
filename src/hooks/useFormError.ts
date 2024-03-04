import { useMemo, useState } from 'react';

export default function useFormError(inputErrors: string[]): any {
  const [errors, setErrors] = useState({});

  useMemo(() => {
    const result: any = { ...errors };
    inputErrors[0]?.split(',').forEach((err) => {
      const fieldName: string = err.split(':')[0];
      const errorMsg: string = err.split(':')[1];
      result[fieldName] = errorMsg;
    });

    setErrors(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputErrors]);

  return errors;
}
