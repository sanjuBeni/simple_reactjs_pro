// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";


function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState("Enable light mode");

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#253440';
      setToggleText('Enable dark mode'); 
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setToggleText('Enable light mode');
    }
  }

  return (
    <>
      <Navbar mode={mode} toggle={toggleMode} toggleText={toggleText}/>
      <div className="container mt-4">
          <Textform heading="Enter the text to analyze" mode={mode}/>
          {/* <About/> */}
      </div>
    </>
  );
}

export default App;
