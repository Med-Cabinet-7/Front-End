import axios from 'axios';

export async function getStrains(userInput) {
  const response = await axios({
    url: 'https://cannapi.herokuapp.com/predict',
    method: 'GET',
    params: {
      user_input: userInput,
    },
  });

  return response.data[0];
}
