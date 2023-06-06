import { renderHook, act } from '@testing-library/react';
import useCounter from '../../pages/custom-hook-example/useCounter';

describe('useCounter', () => {
  it('Should initialize count with the provided initial value', () => {
    // Arrange
    const initialValue = 5;

    // Act
    const { result } = renderHook(() => useCounter(initialValue));

    // Assert
    expect(result.current.count).toBe(initialValue);
  });

  it('Should increment count by 1 when increment function is called', () => {
    // Arrange
    const { result } = renderHook(() => useCounter());

    // Act
    act(() => {
      result.current.increment();
    });

    // Assert
    expect(result.current.count).toBe(1);
  });

  it('Should decrement count by 1 when decrement function is called', () => {
    // Arrange
    const { result } = renderHook(() => useCounter(10));

    // Act
    act(() => {
      result.current.decrement();
    });

    // Assert
    expect(result.current.count).toBe(9);
  });
});
