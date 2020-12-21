import { addtodo, deletetodo,edittodo } from './Actions'

const initialState = [
    { title: 'todo 1', id: 11 },
    { title: 'todo 2', id: 21 },
    { title: 'todo 3', id: 31 },
]

export default function TodoReducer(state = initialState, action) {
    switch (action.type) {
        case addtodo:
            console.log(action.payload)
            return [...state, action.payload]

            break;
        case deletetodo:
            console.log(action.payload)
            let newState = state.filter(
                (item) => item.id != action.payload)
            return [...newState]

            break;

        case edittodo:
            console.log(action.payload.id)
             let index=state.findIndex((item)=>item.id == action.payload.id)
            // console.log('item arr index',index)
            let newState1 = [...state]
            newState1[index].title=action.payload.txt
            

            return newState1
            

            break;

        default:
            return state
            break;
    }
}