import { GET_LOAN} from "../types";

const initialState = {
    loan:[],
    loading:true,
    error:''
}

export default(state = initialState, action)=>{
    switch (action.type){

        case GET_LOAN:return{
            ...state,
            loan:action.payload,
            loading: false,
        }
        default: return state
    }
}