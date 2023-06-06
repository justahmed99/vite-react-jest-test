import { renderHook, act } from '@testing-library/react';
import useInput from '../../pages/custom-hook-example/useInput';

describe('useInput', () => {

  it('Should get the text input', () => {
    // Arrange
    const { result } = renderHook(() => useInput(''));
    const inputTarget = 'Input target';

    // Act
    act(() => {
      result.current[1]({ target: { value: inputTarget, type: 'text' } } as React.ChangeEvent<HTMLInputElement>);
    });

    // Assert
    expect(result.current[0]).toBe(inputTarget);
  });

  it('Should mask the text input', () => {
    // Arrange
    const { result } = renderHook(() => useInput(''));
    const inputTarget = 'Input target';
    const maskedInput = '************';

    // Act
    act(() => {
      result.current[1]({ target: { value: inputTarget, type: 'password' } } as React.ChangeEvent<HTMLInputElement>);
    });

    // Assert
    expect(result.current[0]).toBe(maskedInput);
  });

  it('Should return initial input', () => {
    // Arrange
    const { result } = renderHook(() => useInput());

    // Act

    // Assert
    expect(result.current[0]).toBe('');
  });
});
