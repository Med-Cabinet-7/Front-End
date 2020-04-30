import axios from 'axios';

export async function getStrains(userInput) {
  // console.log("axios userInput", theUserInput);
  // const theUserInput = userInput;
  const response = await axios({
    url: 'https://testingtheweed.herokuapp.com/api/weed/high',
    method: 'POST',
    // method: 'GET',

    // params: {
    //   search: userInput,
    // },
    // params: {
    //   user_input: userInput,
    // },
  });
console.log("axios getStrains", response);
  return response.data[0];
}
