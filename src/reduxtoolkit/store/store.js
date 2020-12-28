import {configureStore} from '@reduxjs/toolkit'
// import reducer from './CounterSlice';
import reducer from './ToDoSlice';

const store = configureStore({
    reducer: reducer
});

export default store

// import counterReducer from './Reducer'
// const store = configureStore({
//     reducer: counterReducer
// })
// export default store