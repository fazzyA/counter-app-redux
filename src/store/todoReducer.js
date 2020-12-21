import { addtodo, deletetodo } from './Actions'

const initialState = [
    { title: 'todo 1', id: 1 },
    { title: 'todo 2', id: 2 },
    { title: 'todo 3', id: 3 },
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
                (item)=>item.id!=action.payload)
            return [...newState]

            break;

        default:
            return state
            break;
    }
}