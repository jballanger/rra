import { combineReducers } from 'redux';
import counter from './counter';
import todo from './todo';
import weather from './weather';

const reducer = combineReducers({
  counter,
  todo,
  weather,
});

export default reducer;
