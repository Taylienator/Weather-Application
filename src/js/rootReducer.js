import { combineReducers } from 'redux';
import SearchReducer from './Components/Search/SearchReducer'

const rootReducer = combineReducers({
// add reducers
    search: SearchReducer
});

export default rootReducer;


