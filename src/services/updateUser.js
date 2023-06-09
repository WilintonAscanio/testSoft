import axios from "axios";

export const updateUser = async (userId, dataUser) => {
  try {
    const URL = "http://127.0.0.1:8000/api/soft_user_project/";
    const { data } = await axios.put(`${URL}${userId}/`, dataUser);
  } catch (error) {
    console.log(error);
  }
};
