// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  
  const [mode, setMode] = useState("primary")
  const [text, setText] = useState("Dark-mode")
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
  setAlert({
    msg: message,
    type: type
    })

    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode=()=>{
    if(mode==="primary")
    {
      setMode("dark")
      document.body.style.backgroundColor="#3d4666"
        setText("Light-mode")
       showAlert("Dark mode enabled","success")
      
      //  setInterval(()=>{
      //   document.title="b"
      //  },2000)
      //  setInterval(()=>{
      //   document.title="a"
      //  },1500)
    }
    else{
      setMode("primary")
      document.body.style.backgroundColor="white"
      setText("Dark-mode")
      showAlert("Light mode enabled","success")
    }
  }
  
  return (
  <>
  <Router>
    <Navbar title="Change-Text" links="About" mode={mode} togglemode={toggleMode} text={text} />  {/*title,about,togglemode are props  */}
    <Alert alert={alert}/>
   
   <div className="container">
   <Routes>
          <Route exact path="/" element={ <TextForm  showalert={showAlert} heading="TextUtils for word manipulation-" mode={mode} placehodl="Enter Your Text"/>}/>
          <Route exact path="/about" element={ <About mode={mode} />}/>
          
         
    </Routes>
   </div>
   </Router>
  </>
  );
}

export default App;
