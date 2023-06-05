import axios from "axios";
import { User } from "../models/User";
import { ReturnData } from "../models/ReturnData";

export default async function getUserGitHub(username: string): Promise<ReturnData> {
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
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log(`error message: ${error.message}`);
      return {
        message: error.message
      };
    } else {
      console.log('An unexpected error occurred');
      return {
        message: 'An unexpected error occurred'
      };
    }
  }
}