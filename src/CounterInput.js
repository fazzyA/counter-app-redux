import React from 'react'
import { useDispatch } from 'react-redux';
import {incAction, decAction} from './store/Actions'
function CounterInput() {
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Direct disatching actions</h3>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>-</button>
                    
            <br/><br/>
            <h3>dispatching actions through functions</h3>
            <button onClick={()=>dispatch(incAction())}>+</button>
            <button onClick={()=>dispatch(decAction())}>-</button>

        </div>
    )
}

export default CounterInput
