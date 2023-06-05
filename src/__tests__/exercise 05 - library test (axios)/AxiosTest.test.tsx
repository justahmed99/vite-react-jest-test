import axios from 'axios';
import getUserGitHub from './../../services/get-user-github-service';
import { User } from '../../models/User';

// mock Axios
jest.mock('axios');

describe('getUserGitHub', () => {
  it('should return user data when API request is successful', async () => {
    // Assert
    const username = 'justahmed99'
    const mockedData: User = {
      id: 10685652,
      login: 'justahmed99',
      name: 'Ahmad Mujahid',
      avatar_url: 'https://avatars.githubusercontent.com/u/10685652?v=4',
    };
    const axiosGetMock = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockedData });

    // Act
    const result = await getUserGitHub(username);

    // Assert
    expect(axiosGetMock).toHaveBeenCalledWith(
      `https://api.github.com/users/${username}`,
      expect.objectContaining({
        headers: {
          Accept: 'application/json',
        },
      })
    );
    expect(result.data.id).toEqual(mockedData.id);
    expect(result.data.login).toEqual(mockedData.login);
    expect(result.data.name).toEqual(mockedData.name);
    expect(result.data.avatar_url).toEqual(mockedData.avatar_url);
  });

  it('should return error message when API request fails', async () => {
    // Arrage
    const username = 'tangnukweklanjiang' // not exist user
    const errorMessage = {
      message: 'An unexpected error occurred'
    };
    const axiosGetMock = jest.spyOn(axios, 'get').mockRejectedValueOnce(errorMessage);

    // Act
    const result = await getUserGitHub(username);

    // Assert
    expect(axiosGetMock).toHaveBeenCalledWith(
      `https://api.github.com/users/${username}`,
      expect.objectContaining({
        headers: {
          Accept: 'application/json',
        },
      })
    );
    expect(result).toEqual(errorMessage);
  });
});
