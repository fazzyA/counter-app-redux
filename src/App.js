import React, { useState } from 'react'
import './App.css';
import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';
import { Provider } from 'react-redux'
import AddTodo from './AddTodo';
import store from './reduxtoolkit/store/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AddTodo/>
      {/* <CounterOutput />
      <CounterInput /> */}
    </div>
    </Provider>
  );
}

export default App;
