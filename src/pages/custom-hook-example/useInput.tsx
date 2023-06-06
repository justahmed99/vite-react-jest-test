import { useState, ChangeEvent } from 'react';

type UseInputResult = [string, (event: ChangeEvent<HTMLInputElement>) => void];

export default function useInput(initialValue = ''): UseInputResult {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.type === 'password'
      ? event.target.value.replace(/./g, '*')
      : event.target.value;

    setValue(targetValue);
  };

  return [value, handleChange];
}
