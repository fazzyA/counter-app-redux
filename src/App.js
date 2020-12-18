import React, { useState } from 'react'
import './App.css';
import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CounterOutput />
      <CounterInput />
    </div>
    </Provider>
  );
}

export default App;
