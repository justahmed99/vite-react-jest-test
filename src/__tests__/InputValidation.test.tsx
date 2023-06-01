import { InputValidationService } from "../services/input-validation-service";

describe('InputValidationService - emailValidation', () => {
  const inputValidationService = new InputValidationService();
  const emailTestMocked = jest.fn(inputValidationService.emailValidation);

  it('Email input should be correct', () => {
    expect(emailTestMocked("ahmad@slash.co")).toBe(true);
    expect(emailTestMocked).toHaveBeenCalledWith("ahmad@slash.co");
  });

  it('Email input should be wrong', () => {
    expect(emailTestMocked("ahmad.slash.co")).toBe(false);
    expect(emailTestMocked).toHaveBeenCalledWith("ahmad.slash.co");
  });

});

describe('InputValidationService - inputLengthLimit', () => {
  const inputValidationService = new InputValidationService();
  const inputLengthTestMocked = jest.fn(inputValidationService.inputLengthLimit);

  it('Input length less than 40', () => {
    expect(inputLengthTestMocked("Hello there, how are you?")).toBe(true);
    expect(inputLengthTestMocked).toHaveBeenCalledWith("Hello there, how are you?");
  });

  it('Input length more than 40', () => {
    expect(inputLengthTestMocked("The quick brown fox jumps over the lazy dog, showcasing its agility and speed.")).toBe(false);
    expect(inputLengthTestMocked).toHaveBeenCalledWith("The quick brown fox jumps over the lazy dog, showcasing its agility and speed.");
  });

});

describe('InputValidationService - sanitizeInput', () => {
  const inputValidationService = new InputValidationService();
  const sanitizeInputMockedTest = jest.fn(inputValidationService.sanitizeInput);

  it('Sanitize HTML tags', () => {
    expect(sanitizeInputMockedTest("<p>This is a <strong>sample</strong> input.</p>")).toBe("This is a sample input.");
    expect(sanitizeInputMockedTest).toHaveBeenCalledWith("<p>This is a <strong>sample</strong> input.</p>");
  });

  it('Sanitize nested HTML tags', () => {
    expect(sanitizeInputMockedTest("<div><p>This is a <span>nested</span> input.</p></div>")).toBe("This is a nested input.");
    expect(sanitizeInputMockedTest).toHaveBeenCalledWith("<div><p>This is a <span>nested</span> input.</p></div>");
  });

  it('Input without HMTL tag', () => {
    expect(sanitizeInputMockedTest("This is a sample input.")).toBe("This is a sample input.");
    expect(sanitizeInputMockedTest).toHaveBeenCalledWith("This is a sample input.");
  });

});