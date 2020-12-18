import { createStore } from 'redux'
import CounterReducer from './reducer'

const store = createStore(CounterReducer);
export default store