import axios from "axios";

export const deleteUser = async (id, data) => {
    try {
        const URL = "https://soft-test.onrender.com/api/soft_user_project/";
        const userDeleted = await axios.put(`${URL}${id}/`, data)

        
    } catch (error) {
        console.log(error);
        
    }
  
}