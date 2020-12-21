import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { deleteTodoAction, edittodoAction } from './store/Actions'

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
    const handleEdit=(id)=>{
        const txt = prompt('dsaas')
        dispatch(edittodoAction(id,txt))

    }
    return (
        <div>{title}
            {
                state.map((item)=>(
                    <div>
                        {item.title}
                    
                    <button onClick={()=>handleEdit(item.id)}>Edit</button>    
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
