import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL:"https://med-cabinet-7.herokuapp.com/api",
    // baseURL:"https://med-cabinet-7.herokuapp.com/api/info",
    headers: {
      Authorization: token
    }
  });
};
