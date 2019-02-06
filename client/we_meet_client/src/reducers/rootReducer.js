import {combineReducers} from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth'

// import user from './userReducer';

const rootReducer = combineReducers({
  // user
  reduxTokenAuth: reduxTokenAuthReducer,
});

export default rootReducer;