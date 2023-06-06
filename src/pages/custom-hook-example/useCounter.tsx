import { useState } from 'react';

type UseCounterResult = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export default function useCounter(initialValue = 0): UseCounterResult {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}
