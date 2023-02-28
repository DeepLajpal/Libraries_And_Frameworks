import GreetRespond from "./Child";
export default function Greeting(){
    return(
    <div>
        <h1>Hello Child, Welcome to Parent Component</h1>
        <GreetRespond name="Parent"/>
    </div>
    
    )
}