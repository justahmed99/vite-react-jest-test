import { renderHook, act } from '@testing-library/react';
import useInput from '../../pages/custom-hook-example/useInput';

describe('useInput', () => {
  it('Should update value when handleChange is called', () => {
    // Arrange
    const { result } = renderHook(() => useInput(''));
    const inputTarget = 'Input target';

    // Act
    act(() => {
      result.current[1]({ target: { value: inputTarget } } as React.ChangeEvent<HTMLInputElement>);
    });

    // Assert
    expect(result.current[0]).toBe(inputTarget);
  });

  it('Should update value when handleChange is called for multiple update', () => {
    // Arrange
    const { result } = renderHook(() => useInput(''));
    const inputTarget = 'Input target';
    const inputTarget2 = 'Input target 2';
    const inputTargetFinal = 'Input target final';

    // Act
    act(() => {
      result.current[1]({ target: { value: inputTarget } } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current[1]({ target: { value: inputTarget2 } } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current[1]({ target: { value: inputTargetFinal } } as React.ChangeEvent<HTMLInputElement>);
    });

    // Assert
    expect(result.current[0]).toBe(inputTargetFinal);
  });

  it('Should initialize with initial value', () => {
    // Arrange 
    const initialValue = 'Initial value';

    // Act
    const { result } = renderHook(() => useInput(initialValue));

    // Assert
    expect(result.current[0]).toBe(initialValue);
  });
});
