 const increment = 'INCREMENT'
 const decrement = 'DECREMENT'
export function incAction(){
    return {
        type: increment ,
          // {type:'INREMENT'}
    }
}
export function decAction(){
    return {
        type:decrement
    }
}