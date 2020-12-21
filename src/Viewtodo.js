import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { deleteTodoAction } from './store/Actions'

function Viewtodo() {
    const [title, settitle] = useState('')
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const handleDelete = (id)=>{
        dispatch(deleteTodoAction(id))
    }
    const handleChange = (e)=>{
        console.log('im in view/change')
        settitle(e.target.value)

    }
    return (
        <div>{title}
            {
                state.map((item)=>(
                    <div>
                    <input name='text' key={item.id} value={item.title} onChange={handleChange}/>
                    &nbsp;  
                    <button onClick={handleEdit}>Edit</button>    
                    <button style={{}} 
                    onClick={()=>handleDelete(item.id)}>del</button>
                    </div>
                ))
                //sdadas
            }
        </div>
    )
}

export default Viewtodo
