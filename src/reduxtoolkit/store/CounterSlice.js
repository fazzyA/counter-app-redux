// import { createSlice } from "@reduxjs/toolkit";
// import counterReducer from "./Reducer";
// const CounterSlice = createSlice(
//     {
//         name: counterReducer,
//         initialState: 0,
//         reducers: {
//             incrementAction: state => state + 1,
//             decrementAction: state => state - 1  
//           }
//     }
// )
// export const { incrementAction,decrementAction } = CounterSlice.actions;
// export default CounterSlice.reducer

import {createSlice} from '@reduxjs/toolkit'

const CounterSlice = createSlice(
    {
        name: 'counter',
        initialState: 0,
        reducers: {
            incrementAction: state => state+1,
            decrementAction: state => state-1

        }
    
    }
);

export const {incrementAction, decrementAction} = CounterSlice.actions
const reducer = CounterSlice.reducer
export default reducer