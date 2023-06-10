import axios from "axios";

export const updateUser = async (userId, dataUser) => {
  try {
    const URL = "https://soft-test.onrender.com/api/soft_user_project/";
    const { data } = await axios.put(`${URL}${userId}/`, dataUser);
  } catch (error) {
    console.log(error);
  }
};
