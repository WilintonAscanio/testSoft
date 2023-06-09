import axios from "axios";

export const deleteUser = async (id, data) => {
    try {
        const URL = "http://127.0.0.1:8000/api/soft_user_project/";
        const userDeleted = await axios.put(`${URL}${id}/`, data)

        
    } catch (error) {
        console.log(error);
        
    }
  
}