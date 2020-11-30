import { combineReducers } from "redux";
import ProfileReducer from "./profile-reducer";

const reducer = combineReducers({
    profileState: ProfileReducer,
    //users:UsersReducer,
    //stock:StockReducer
});

export default reducer;