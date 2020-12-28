import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import CounterButton from './counterButton'
import CounterView from './counterView'

function App() {
    return (
        <Provider store={store}>
        <div>
            <CounterView/>
            <CounterButton/>
        </div>
        </Provider>
    )
}

export default App
