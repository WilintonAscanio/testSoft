import axios from "axios";

export const createUser = (user) => {
  try {
    const URL = "https://soft-test.onrender.com/api/soft_user_project/";
    const newUser = axios.post(URL, user)

  } catch (error) {
    console.log(error);
  }
};
