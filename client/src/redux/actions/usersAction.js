import axios from "axios";
import { GET_USER, USER_ERROR} from "../types";



export const getUser =()=>{
    return async (dispatch)=>{
        try {
            const res = await axios.get(`/customer`)
            dispatch({
                type : GET_USER,
                payload: res.data
            })

        }catch(error){
            dispatch({
                type:USER_ERROR,
                payload: console.log(error)
            })
        }
    }
}
