import { DateValidationService } from "../../services/date-validation-service";

describe("DateValidationService - validateDate", () => {
  let dateValidationService: DateValidationService;

  beforeEach(() => {
    dateValidationService = new DateValidationService();
  });

  afterEach(() => jest.clearAllMocks());

  it("Should verify valid input", () => {
    // Arrange
    const dateInput = "2023-06-13";

    // Act
    const isValid = dateValidationService.validateDate(dateInput)

    // Assert
    expect(isValid).toBe(true);
  });

  it("Should verify non numeric input", () => {
    // Arrange
    const dateInput = "ABCD-06-29";

    // Act
    const isValid = dateValidationService.validateDate(dateInput)

    // Assert
    expect(isValid).toBe(false);
  });

  it("Should verify false year input", () => {
    // Arrange
    const dateInput = "0-06-30";

    // Act
    const isValid = dateValidationService.validateDate(dateInput)

    // Assert
    expect(isValid).toBe(false);
  });

  it("Should verify false month input", () => {
    // Arrange
    const dateInput = "2023-13-10";

    // Act
    const isValid = dateValidationService.validateDate(dateInput)

    // Assert
    expect(isValid).toBe(false);
  });

  it("Should verify false date input", () => {
    // Arrange
    const dateInput = "2023-06-32";

    // Act
    const isValid = dateValidationService.validateDate(dateInput)

    // Assert
    expect(isValid).toBe(false);
  });

});