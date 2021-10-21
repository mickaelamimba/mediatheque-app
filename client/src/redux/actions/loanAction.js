import axios from "axios";
import { GET_ERROR, GET_LOAN} from "../types";

export const getLoan =()=> {
    return async (dispatch)=>{
        try{
            const res = await axios.get(`/loan`)
            dispatch({
                type:GET_LOAN,
                payload:await res.data
            })

        }catch(error){
            dispatch({
                type:GET_ERROR,
                payload: console.log(error)
            })

        }
    }
}