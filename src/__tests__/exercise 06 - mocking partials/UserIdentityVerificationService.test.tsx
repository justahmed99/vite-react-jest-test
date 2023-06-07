// import { UserIdentity } from "../../models/UserIdentity";
import { UserIdentity } from "../../models/UserIdentity";
import { UserIdentityVerficationService } from "../../services/user-identity-verification-service";

let service: UserIdentityVerficationService;
let user: UserIdentity;
let userWithUndefinedAge: UserIdentity;

beforeEach(() => {
  service = new UserIdentityVerficationService();
  user = {
    name: 'Ahmad',
    age: 20,
    origin: 'PAK',
    passportNumber: 'CA12345'
  };

  userWithUndefinedAge = {
    name: 'Ahmad',
    age: undefined,
    origin: 'IDN',
    passportNumber: 'CA12345'
  }
})

describe('UserIdentityVerificationService', () => {
  it("Should partially mock test for isLocal", () => {
    // Arrange
    jest.spyOn(service, 'isLocal').mockImplementation((mockUser?: UserIdentity) => {
      return mockUser?.origin == 'PAK';
    });

    // Act
    const result1 = service.isLocal(user);
    const result2 = service.isPassAgeLimit(user);
    const result3 = service.isPassAgeLimit(userWithUndefinedAge);
    const result4 = service.isHavePassport(user);

    // Assert
    expect(result1).toEqual(true);
    expect(result2).toEqual(true);
    expect(result3).toEqual(false);
    expect(result4).toEqual(true);
  });

  it("Should partially mock test for isPassAgeLimit", () => {
    // Arrange
    jest.spyOn(service, 'isPassAgeLimit').mockImplementation((mockUser?: UserIdentity) => {
      if (mockUser?.age !== undefined)
        return mockUser?.age >= 21;
      else
        return false;
    });

    // Act
    const result1 = service.isLocal(user);
    const result2 = service.isPassAgeLimit(user);
    const result3 = service.isPassAgeLimit(userWithUndefinedAge);

    // Assert
    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
    expect(result3).toEqual(false);
  });

  it("Should partially mock test for isHavePassport", () => {
    // Arrange
    jest.spyOn(service, 'isHavePassport').mockImplementation((mockUser?: UserIdentity) => {
      if (mockUser?.origin === "PAK")
        return true;
      else {
        return mockUser?.passportNumber === undefined ? false : true;
      }
    });

    // Act
    const result1 = service.isLocal(user);
    const result2 = service.isPassAgeLimit(user);
    const result3 = service.isHavePassport(user);

    // Assert
    expect(result1).toEqual(false);
    expect(result2).toEqual(true);
    expect(result3).toEqual(true);
  });

  it("Should reject foreigner without passport in isHavePassport", () => {
    // Arrange
    user.passportNumber = undefined;

    // Act
    const result3 = service.isHavePassport(user);

    // Assert
    expect(result3).toEqual(false);
  });

  it("Should pass local in isHavePassport", () => {
    // Arrange
    user.origin = 'IDN';
    // Act
    const result3 = service.isHavePassport(user);

    // Assert
    expect(result3).toEqual(true);
  });

});
