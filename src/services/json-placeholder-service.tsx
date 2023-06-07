import axios from "axios";
import { ReturnData } from "../models/ReturnData";
import { Todos } from "../models/Todos";

export class JsonPlaceholderService {
  async getTodo(id: string): Promise<ReturnData<Todos>> {
    try {
      const { data: Apidata } = await axios.get<Todos>(
        `https://jsonplaceholder.typicode.com/posts/${parseInt(id)}`,
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
}