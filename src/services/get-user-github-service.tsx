import axios from "axios";
import { User } from "../models/User";
import { ReturnData } from "../models/ReturnData";

export default async function getUserGitHub(username: string): Promise<ReturnData<User>> {
  try {
    const { data: Apidata } = await axios.get<User>(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );

    return {
      data: Apidata
    };
  } catch (error: unknown) {
    return {
      message: 'An unexpected error occurred'
    };

  }
}