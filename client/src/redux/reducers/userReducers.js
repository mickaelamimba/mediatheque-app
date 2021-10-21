import {GET_USER, LOGIN, USER_CREATE} from "../types";


const initialState = {
    user:[],
    loading:true,
    loginInfo:''
}
export default(state = initialState, action)=>{
    switch (action.type){
        case GET_USER:
            return{
                ...state,
                user:action.payload,
                loading: false
            }
         case LOGIN:return{
             ...state,
             loginInfo:action.payload,
             loading: false
         }
        case USER_CREATE:return{
            ...state,
            user:[...state.user,action.payload],
            loading: false
        }

        default: return state
    }

}