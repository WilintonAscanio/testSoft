import axios from "axios";

export const getAllUsers = async () => {
  try {
    const URL = "http://127.0.0.1:8000/api/soft_user_project/";
    const { data } = await axios.get(URL);
    return data
  } catch (error) {
    console.log(error);
  }
};

