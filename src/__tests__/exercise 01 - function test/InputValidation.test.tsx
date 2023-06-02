import { InputValidationService } from "../../services/input-validation-service";

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
  let inputValidationService: InputValidationService;
  let sanitizeInputMockedTest: jest.Mock;

  beforeEach(() => {
    inputValidationService = new InputValidationService();
    sanitizeInputMockedTest = jest.fn(inputValidationService.sanitizeInput);
  });

  it('Should sanitize HTML tags', () => {
    // Arrange
    const input = "<p>This is a <strong>sample</strong> input.</p>";
    const expected = "This is a sample input.";

    // Act
    const sanitizedInput = sanitizeInputMockedTest(input);

    // Assert
    expect(sanitizedInput).toBe(expected);
    expect(sanitizeInputMockedTest).toHaveBeenCalledWith(input);
  });

  it('Should sanitize nested HTML tags', () => {
    // Arrange
    const input = "<div><p>This is a <span>nested</span> input.</p></div>";
    const expected = "This is a nested input.";

    // Act
    const sanitizedInput = sanitizeInputMockedTest(input);

    // Assert
    expect(sanitizedInput).toBe(expected);
    expect(sanitizeInputMockedTest).toHaveBeenCalledWith(input);
  });

  it('Shooul accept input without HMTL tag', () => {
    // Arrange
    const input = "This is a sample input.";
    const expected = "This is a sample input.";

    // Act
    const sanitizedInput = sanitizeInputMockedTest(input);

    // Assert
    expect(sanitizedInput).toBe(expected);
    expect(sanitizeInputMockedTest).toHaveBeenCalledWith(input);
  });

});

describe('InputValidationService - passwordValidation', () => {
  let inputValidationService: InputValidationService;
  let passwordValidationMockedTest: jest.Mock;

  beforeEach(() => {
    inputValidationService = new InputValidationService();
    passwordValidationMockedTest = jest.fn(inputValidationService.passwordValidation);
  });

  it('Should return true for a valid password', () => {
    // Arrange 
    const password = "j4karTa1928";

    // Act
    const isValid = passwordValidationMockedTest(password);

    // Assert
    expect(isValid).toBe(true);
    expect(passwordValidationMockedTest).toHaveBeenCalledWith(password);
  });

  it('Should return false for an invalid password without uppercase', () => {
    // Arrange 
    const password = "j4karta1928";

    // Act
    const isValid = passwordValidationMockedTest(password);

    // Assert
    expect(isValid).toBe(false);
    expect(passwordValidationMockedTest).toHaveBeenCalledWith(password);
  });

  it('should return false for an invalid password without lowercase', () => {
    // Arrange 
    const password = "J4KARTA1928";

    // Act
    const isValid = passwordValidationMockedTest(password);

    // Assert
    expect(isValid).toBe(false);
    expect(passwordValidationMockedTest).toHaveBeenCalledWith(password);
  });

  it('Should return false for an invalid password without number', () => {
    // Arrange 
    const password = "jakartaABC";

    // Act
    const isValid = passwordValidationMockedTest(password);

    // Assert
    expect(isValid).toBe(false);
    expect(passwordValidationMockedTest).toHaveBeenCalledWith(password);
  });

  it('Should return false for an invalid password less than 8 characters', () => {
    // Arrange 
    const password = "J4karta";

    // Act
    const isValid = passwordValidationMockedTest(password);

    // Assert
    expect(isValid).toBe(false);
    expect(passwordValidationMockedTest).toHaveBeenCalledWith(password);
  });

});