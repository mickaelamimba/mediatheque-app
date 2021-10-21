import {ADD_BOOK, BOOK_ERROR, GET_BOOK, GET_ONE_BOOK} from "../types";


const initialState = {
    book:[],
    loading:true,
    error:''
}
export default(state = initialState, action)=>{
    switch (action.type) {
        case GET_BOOK :
            return {
                ...state,
                book:action.payload,
                loading: false,


        }
        case BOOK_ERROR:
            return{
                ...state,
                error:action.payload,
            }
        case ADD_BOOK :

            return {
                ...state,
                book:[...state.book, action.payload],
                loading: false

            }
        case GET_ONE_BOOK :
            return {
                ...state,
                book:[state.book.filter(value => value !== action.payload)]
                }

        default: return state
    }
}