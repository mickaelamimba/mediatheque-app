import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import rootReducer from './redux/reducers'
const initalState = {

}
const store = createStore(rootReducer,initalState, applyMiddleware(thunk));

export default store