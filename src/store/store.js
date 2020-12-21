import { createStore } from 'redux'
import CounterReducer from './reducer'
import TodoReducer from './todoReducer'
const store = createStore(TodoReducer);
export default store