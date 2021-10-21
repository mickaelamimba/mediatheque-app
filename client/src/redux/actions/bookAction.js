import axios from 'axios'
import {ADD_BOOK, BOOK_ERROR, GET_BOOK} from "../types";

export const getBook =(page)=> {
    return async (dispatch)=>{
        try{
            const res = await axios.get(`/books?page=${page}`)
            dispatch({
                type:GET_BOOK,
                payload:res.data
            })

        }catch(error){
            dispatch({
                type:BOOK_ERROR,
                payload: console.log(error)
            })

        }
    }
}
export const getOneBook = payload => async dispatch =>{
    try{
        const res = await axios.get('/one-book')
        dispatch({
            type:ADD_BOOK,
            payload:res.data
        })
    }catch(error){

    }
}

export const postBook = payload => async dispatch =>{
    try{

        const res = await axios.post('/book-post',payload,{
            header:  new Headers({Accept:"application/json","Content-Type": "multipart/form-data"})
        } )
        console.log(res)
        dispatch({
            type:ADD_BOOK,
            payload:res.data
        })

    }catch(error){
        return await Promise.reject(error.response)


    }

}