import axios from "axios";

export const getAllUsers = async () => {
  try {
    const URL = "https://soft-test.onrender.com/api/soft_user_project/";
    const { data } = await axios.get(URL);
    return data
  } catch (error) {
    console.log(error);
  }
};

