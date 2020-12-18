
const initialState = {
    counter: 0,
    a:10,
    b:20
}

function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,               
                counter: state.counter+1
            }

            break;
        case 'DECREMENT':
            return {
                ...state, 
                counter: state.counter - 1
            }
            break;

        default:
            return state
            break;
    }
}
export default CounterReducer