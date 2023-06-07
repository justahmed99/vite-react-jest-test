import { UserIdentity } from "../models/UserIdentity";

export class UserIdentityVerficationService {
  isLocal(user?: UserIdentity): boolean {
    return user?.origin === "IDN";
  }

  isPassAgeLimit(user?: UserIdentity): boolean {
    if (user?.age !== undefined)
      return user?.age >= 18;
    else
      return false;
  }

  isHavePassport(user?: UserIdentity): boolean {
    if (user?.origin === "IDN")
      return true;
    else {
      return user?.passportNumber === undefined ? false : true;
    }
  }
}