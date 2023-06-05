import { useState, ChangeEvent } from 'react';

type UseInputResult = [string, (event: ChangeEvent<HTMLInputElement>) => void];

export default function useInput(initialValue = ''): UseInputResult {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}