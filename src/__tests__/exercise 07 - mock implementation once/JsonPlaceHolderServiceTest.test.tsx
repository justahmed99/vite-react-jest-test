import axios from "axios";
import { JsonPlaceholderService } from "../../services/json-placeholder-service";
import { ReturnData } from "../../models/ReturnData";
import { Todos } from "../../models/Todos";

jest.mock('axios');

let service: JsonPlaceholderService;

beforeEach(() => {
  service = new JsonPlaceholderService();
});

describe('JsonPlaceholderService', () => {
  it('should return the same input', async () => {

    const mockedResponse1: ReturnData<Todos> = {
      "data": {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    };

    const mockedResponse2: ReturnData<Todos> = {
      "data": {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }
    }

    const mockAxiosGet = jest.spyOn(axios, 'get');
    mockAxiosGet
      .mockImplementationOnce(() => Promise.resolve(mockedResponse1))
      .mockImplementationOnce(() => Promise.resolve(mockedResponse2));

    const result = await service.getTodo('2');
    expect(result).toEqual(mockedResponse1);

    const result2 = await service.getTodo('3');
    expect(result2).toEqual(mockedResponse2);

    mockAxiosGet.mockRestore();
  });
  it('should handle error when getTodo fails', async () => {
    const mockedError = new Error('Mocked error');
    const mockAxiosGet = jest.spyOn(axios, 'get');
    mockAxiosGet.mockRejectedValueOnce(mockedError);

    const service = new JsonPlaceholderService();
    const result = await service.getTodo('1');

    expect(result).toEqual({
      message: 'An unexpected error occurred',
    });

    expect(mockAxiosGet).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    mockAxiosGet.mockRestore();
  });

});