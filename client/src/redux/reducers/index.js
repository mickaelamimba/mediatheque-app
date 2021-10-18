import { combineReducers } from 'redux'
import bookReducers from "./bookReducers";
import userReducer from "./userReducers";

export default combineReducers(
    {
        book: bookReducers,
        user: userReducer
    }
)