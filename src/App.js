import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Counter from './components/counter'
import {DisplayStore} from './components/displaystore'
function App() {
  return (
    <div className="App">
     <Counter/>
     <DisplayStore/>
    </div>
  );
}

export default App;
