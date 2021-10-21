import axios from "axios";
import {GET_USER, LOGIN, USER_CREATE, USER_ERROR} from "../types";



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

export const login =(payload)=>{
    return async (dispatch)=>{
        try {
            const res = await axios.post(`/login`,payload)

            dispatch({
                type : LOGIN,
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

export const createAccount =(payload)=>{
    return async (dispatch)=>{
        try {
            const res = await axios.post(`/customer-post`,payload)
            dispatch({
                type : USER_CREATE,
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