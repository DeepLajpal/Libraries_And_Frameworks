import './App.css';
import Greeting from "./Components/Parent"
import Modetoggler from './Components/ternary_operator';
import InputComponent from './Components/usestate'


function App() {
 const clickHandler = ()=>{console.log("Clicked me")};
 const copyHandler = ()=>{console.log("Copying text not Allowed")}
  return (
    <div onCopy={copyHandler} className="App">
      <Greeting/>
      <button onClick={clickHandler}>Click me</button>
      <Modetoggler/>
      <InputComponent/>
    </div>
    
  );
}

export default App;
