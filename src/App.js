import "./App.css";
import NavBar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';
import React, {useState} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Alert from "./components/Alert";

function App() {

  const [mode,setMode] = useState('light');
  

  const [alert,setAlert] = useState(null);

  const showAlert = (msg,type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      document.title = 'Text Utils-Dark'
      showAlert("Dark Mode Enabled","success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'Text Utils-Light'
      showAlert("Light Mode Enabled","success")

    }
  }

  const toggleRedMode = () => {
    if(mode === 'light') {
      setMode('#8b0000')
      document.body.style.backgroundColor = 'red'
      document.title = 'Text Utils-Red Dark'
      showAlert("Red Dark Mode Enabled", "success")
    }else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      document.title = 'Text Utils-Light'
      showAlert("Light Mode Enabled","success")
    }
  }

  const toggleGreenMode = () => {
    if(mode === 'light') {
      setMode('#006400')
      document.body.style.backgroundColor = 'green'
      document.title = 'Text Utils-Green Dark'
      showAlert("Green Dark Mode Enabled", "success")
    }else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      document.title = 'Text Utils-Light'
      showAlert("Light Mode Enabled","success")
    }
  }

  const toggleBlueMode = () => {
    if(mode === 'light') {
      setMode('#000080')
      document.body.style.backgroundColor = 'blue'
      document.title = 'Text Utils-Blue Dark'
      showAlert("Blue Dark Mode Enabled", "success")
    }else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      document.title = 'Text Utils-Light'
      showAlert("Light Mode Enabled","success")
    }
  }

  return (
    <>
    <NavBar title="TextUtils" mode={mode} toggleMode = {toggleMode} toggleRedMode = {toggleRedMode} toggleGreenMode={toggleGreenMode} toggleBlueMode={toggleBlueMode}/>
      <Alert alert={alert}/>
      
      <div className="container">
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter text below to analyze data" mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About title="About Us" mode={mode}/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
