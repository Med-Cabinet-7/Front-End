import axios from 'axios';

export const getLoginToken = async (username, password) => {
  console.log("Axios in login", username, password);
  const response = await axios({
    baseURL: 'https://med-cabinet-7.herokuapp.com/api/auth/login',
    // url: '/auth/login',
    method: 'POST',
    data: {
      username,
      password,
    }

  });
  console.log("axios login data", response);
  return response.data.payload;
}
