import React,{useState} from 'react'
// import {incrementAction, decrementAction} from '../store/Action'
import { useDispatch }from 'react-redux'
import { decrementAction, incrementAction } from '../store/CounterSlice';
import { add } from '../store/ToDoSlice';
function CounterButton() {
    const [title, settitle] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault()
        let newobj={title,id:1}
        dispatch(add(newobj))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e)=>settitle(e.target.value)}></input>
                <button type='submit'>submit</button>
            </form>
            <button onClick={()=>dispatch(incrementAction())}>+</button>
            <button onClick={()=>dispatch(decrementAction())}>-</button>
        </div>
    )
}

export default CounterButton
