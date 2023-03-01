import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About_us from './Components/About_us';
import Display_Img from './Components/Display_Img';
import { Routes, Route, Link } from 'react-router-dom';
import Display_Video from './Components/Display_Video';



function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <Link to='/' className='home nav-item'>Home</Link>
        <Link to ='/Contact' className='contact-us nav-item'>Contact</Link>
        <Link to ='/About_us' className='about-us nav-item'>About</Link>
        <Link to ='/Display_Img' className='Display-Img nav-item'>Img</Link>
        <Link to ='/Display_Video' className='Display_Video nav-item'>Video</Link> 
      </nav>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/About_us' element={<About_us/>} />
      <Route path='/Display_Img' element={<Display_Img/>}/>
      <Route path='/Display_Video' element={<Display_Video/>}/>
      </Routes>
    </div>
  );
}

export default App;
