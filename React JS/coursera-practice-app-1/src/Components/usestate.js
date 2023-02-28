import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState('hello'); 
  console.log(useState("hello"))

  function handleChange(e) { 
    setText(e.target.value); 
    console.log(e);
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('')}> 
        Reset 
      </button> 
    </> 
  ); 
} 