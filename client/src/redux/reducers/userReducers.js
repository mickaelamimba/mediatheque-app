import {GET_USER} from "../types";


const initialState = {
    user:[],
    loading:true
}
export default(state = initialState, action)=>{
    switch (action.type){
        case GET_USER:
            return{
                ...state,
                user:action.payload,
                loading: false
            }

        default: return state
    }

}