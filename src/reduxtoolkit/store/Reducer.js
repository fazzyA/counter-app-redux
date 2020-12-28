import {createReducer} from '@reduxjs/toolkit'
import {incrementAction, decrementAction} from './Action'

 const counterReducer = createReducer(0, {
  [incrementAction]: state => state + 1,
  [decrementAction]: state => state - 1  
})
export default counterReducer