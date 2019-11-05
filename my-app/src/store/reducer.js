import {combineReducers} from "redux";
import headerReducer from "../components/head/store/headerReducer";
import homeReducer from "../components/home/store/homeReducer";
export default combineReducers({
    home:homeReducer,
    head:headerReducer
})
