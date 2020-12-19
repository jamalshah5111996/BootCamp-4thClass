import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js';

function App() {

let [count,setCount] = useState(0)
let [isMorning,setMorning] = useState(false)

  return (
<div className={`box ${isMorning ? 'dayLight' : ''}`}>
<h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
  <Message counter={count}/>
    <hr/>
    <button onClick={()=>setCount(count+1)}>Update Counter</button>
    <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    <hr/>
    </div>
  );
}

export default App;
