import axios from 'axios';

export const getLoginToken = async (username, password) => {
  const response = await axios({
    baseURL: 'https://med-cabinet-7.herokuapp.com/api/',
    url: '/auth/login',
    method: 'POST',
    data: {
      username,
      password,
    }
  });

  return response.data.payload;
}
