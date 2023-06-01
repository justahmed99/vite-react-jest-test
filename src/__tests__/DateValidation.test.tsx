import { DateValidationService } from "../services/date-validation-service";

describe("DateValidationService - validateDate", () => {
  const dateValidationService = new DateValidationService();

  it("Valid date input", () => {
    const validateDateTestMocked = jest.spyOn(dateValidationService, 'validateDate');

    validateDateTestMocked.mockImplementation(() => true);
    expect(dateValidationService.validateDate("2023-06-13")).toBe(true);
    expect(validateDateTestMocked).toHaveBeenCalledWith("2023-06-13");
    validateDateTestMocked.mockRestore();
  });

  it("Non numeric input", () => {
    const validateDateTestMocked = jest.spyOn(dateValidationService, 'validateDate');

    validateDateTestMocked.mockImplementation(() => false);
    expect(dateValidationService.validateDate("ABCD-06-29")).toBe(false);
    expect(validateDateTestMocked).toHaveBeenCalledWith("ABCD-06-29");
    validateDateTestMocked.mockRestore();
  });

  it("False year input", () => {
    const validateDateTestMocked = jest.spyOn(dateValidationService, 'validateDate');

    validateDateTestMocked.mockImplementation(() => false);
    expect(dateValidationService.validateDate("0-06-30")).toBe(false);
    expect(validateDateTestMocked).toHaveBeenCalledWith("0-06-30");
    validateDateTestMocked.mockRestore();
  });

  it("False month input", () => {
    const validateDateTestMocked = jest.spyOn(dateValidationService, 'validateDate');

    validateDateTestMocked.mockImplementation(() => false);
    expect(dateValidationService.validateDate("2023-13-10")).toBe(false);
    expect(validateDateTestMocked).toHaveBeenCalledWith("2023-13-10");
    validateDateTestMocked.mockRestore();
  });

  it("False date input", () => {
    const validateDateTestMocked = jest.spyOn(dateValidationService, 'validateDate');

    validateDateTestMocked.mockImplementation(() => false);
    expect(dateValidationService.validateDate("2023-06-32")).toBe(false);
    expect(validateDateTestMocked).toHaveBeenCalledWith("2023-06-32");
    validateDateTestMocked.mockRestore();
  });

});