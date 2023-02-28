import { useState } from "react";

const Modetoggler = ()=>{
    var [ mode, setMode ]  = useState(false) ;
    var [buttonText, setButtonText] = useState("Lightmode");
    var darkMode = <h1>DarkMode is On</h1>;
    var lightMode = <h1>lightMode is On</h1>;



    const toggleMode = ()=>{
        setMode(!mode);
        setButtonText(buttonText==="Lightmode"?buttonText="Darkmode": buttonText="Lightmode");
        mode? console.log("Darkmode is on") : console.log("Light is on");
         
    }
    return(
    <>
    {mode? darkMode : lightMode}
    <button onClick={toggleMode}>{buttonText}</button>
    </>
    )
    

}

export default Modetoggler;