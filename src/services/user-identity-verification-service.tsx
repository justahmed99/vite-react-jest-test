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
  // localUserVerification(user?: UserIdentity): [boolean, string?] {
  //   if (user?.origin != "IDN") {
  //     return [false, "You need visa"];
  //   } else {
  //     return [true];
  //   }
  // }

  // passportNumberVerification(user: UserIdentity = new UserIdentity()): [boolean, string?] {
  //   if (user.age === undefined || user.name === undefined || user.origin === undefined || user.passportNumber === undefined) {
  //     return [false, "Invalid input!"];
  //   } else {

  //     if (user.origin == "IDN") {
  //       return [false, "You are local citizen. No need for visa"];
  //     }

  //     return [true];
  //   }
  // }
}