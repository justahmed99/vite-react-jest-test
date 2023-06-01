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

  passwordValidation(password: string): boolean {
    if (password.length < 8) {
      return false;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return (!hasUppercase || !hasLowercase || !hasNumber) ? false : true;
  }
}