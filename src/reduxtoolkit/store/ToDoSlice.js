import { createSlice } from '@reduxjs/toolkit'

const TodoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        add(state, action) {
            console.log(action.payload)
            return [...state, action.payload]
        },
        deletetodo(state,action){
            console.log(action.id)
        }
    }
})
export const {add, deletetodo} = TodoSlice.actions
const reducer = TodoSlice.reducer
export default reducer