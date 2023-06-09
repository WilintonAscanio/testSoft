import axios from "axios";

export const deleteUser = async (id) => {
    try {
        const URL = "http://127.0.0.1:8000/api/soft_user_project/";
        const userDeleted = await axios.delete(`${URL}${id}`)

        
    } catch (error) {
        console.log(error);
        
    }
  
}