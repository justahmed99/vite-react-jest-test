import { DateValidationService } from "../../services/date-validation-service";

describe("DateValidationService - validateDate", () => {
  let dateValidationService: DateValidationService;
  let validateDateTestMocked: jest.SpyInstance;

  beforeEach(() => {
    dateValidationService = new DateValidationService();
    validateDateTestMocked = jest.spyOn(
      dateValidationService,
      'validateDate'
    );
  });

  afterEach(() => jest.clearAllMocks());

  it("Should verify valid input", () => {
    // Arrange
    const dateInput = "2023-06-13";
    validateDateTestMocked.mockImplementation(() => true);

    // Act
    const isValid = dateValidationService.validateDate(dateInput)

    // Assert
    expect(isValid).toBe(true);
    expect(validateDateTestMocked).toHaveBeenCalledWith(dateInput);
  });

  it("Should verify non numeric input", () => {
    // Arrange
    const dateInput = "ABCD-06-29";
    validateDateTestMocked.mockImplementation(() => false);

    // Act
    const isValid = dateValidationService.validateDate(dateInput)

    // Assert
    expect(isValid).toBe(false);
    expect(validateDateTestMocked).toHaveBeenCalledWith(dateInput);
  });

  it("Should verify false year input", () => {
    // Arrange
    const dateInput = "0-06-30";
    validateDateTestMocked.mockImplementation(() => false);

    // Act
    const isValid = dateValidationService.validateDate(dateInput)

    // Assert
    expect(isValid).toBe(false);
    expect(validateDateTestMocked).toHaveBeenCalledWith(dateInput);
  });

  it("Should verify false month input", () => {
    // Arrange
    const dateInput = "2023-13-10";
    validateDateTestMocked.mockImplementation(() => false);

    // Act
    const isValid = dateValidationService.validateDate(dateInput)

    // Assert
    expect(isValid).toBe(false);
    expect(validateDateTestMocked).toHaveBeenCalledWith(dateInput);
  });

  it("Should verify false date input", () => {
    // Arrange
    const dateInput = "2023-06-32";
    validateDateTestMocked.mockImplementation(() => false);

    // Act
    const isValid = dateValidationService.validateDate(dateInput)

    // Assert
    expect(isValid).toBe(false);
    expect(validateDateTestMocked).toHaveBeenCalledWith(dateInput);
  });

});