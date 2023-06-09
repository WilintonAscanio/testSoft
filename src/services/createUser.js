import axios from "axios";

export const createUser = (user) => {
  try {
    const URL = "http://127.0.0.1:8000/api/soft_user_project/";
    const newUser = axios.post(URL, user)
    console.log(newUser);

  } catch (error) {
    console.log(error);
  }
};
