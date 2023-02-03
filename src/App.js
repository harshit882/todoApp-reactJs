import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [input ,setInput] = useState({
    search : '',
    titles : '',
    textarea : ''
  })
  function handelChange(e) { 
      const {name ,value} = e.target
     setInput({
      ...input,
      [name] : value,
     })
  }
  return (
    <div className="App">
     <Navbar input ={input.search} handelChange={handelChange}/>
     <TextForm   input2 ={input.textarea} input1={input.titles} handelChange={handelChange}/>
    </div>
  );
}

export default App;
