import React,{useState} from 'react'
import {addTodoAction,deleteTodoAction} from './store/Actions'
 import {useDispatch} from 'react-redux'
import Viewtodo from './Viewtodo'

function AddTodo() {
     const dispatch = useDispatch()
    const [task,settask]=useState({title:'',id:''})
    const handleChange =(e)=>{
        settask({
            title:e.target.value,
            id: Math.random()
        })

    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addTodoAction(task))
        // dispatch({type: 'ADD_TODO', payload:task})

        console.log()

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='task' onChange={handleChange}/>
                <button type='submit'>Add</button>
            </form>
            <Viewtodo/>
        </div>
    )
}

export default AddTodo
