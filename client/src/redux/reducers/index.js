import { combineReducers } from 'redux'
import bookReducers from "./bookReducers";
import userReducer from "./userReducers";
import loanReducer from "./loanReducer";

export default combineReducers(
    {
        book: bookReducers,
        user: userReducer,
        loan: loanReducer
    }
)