export class InputValidationService {
  emailValidation(input: string): boolean {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(input);
  }

  inputLengthLimit(input: string): boolean {
    return input.length <= 40;
  }

  sanitizeInput(input: string): string {
    const sanitizedInput = input.replace(/<.*?>/g, '');
    return sanitizedInput;
  }
}